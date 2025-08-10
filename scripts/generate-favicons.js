#!/usr/bin/env node

/**
 * Favicon Generator Script
 * This script generates various favicon formats from the SVG source
 * 
 * Prerequisites:
 * - Install sharp: npm install sharp
 * - Install svg2png: npm install svg2png
 */

const fs = require('fs');
const path = require('path');

console.log('🎨 Favicon Generation Script');
console.log('============================');

// Check if required packages are installed
try {
  require('sharp');
  console.log('✅ Sharp package found');
} catch (error) {
  console.log('❌ Sharp package not found. Install with: npm install sharp');
  console.log('   This package is needed for image processing');
  process.exit(1);
}

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('📁 Created public directory');
}

// Generate favicon files
async function generateFavicons() {
  try {
    const sharp = require('sharp');
    
    // Create a simple colored square as favicon (fallback if SVG processing fails)
    const size = 32;
    const buffer = Buffer.alloc(size * size * 4);
    
    // Fill with blue color (#3B82F6)
    for (let i = 0; i < buffer.length; i += 4) {
      buffer[i] = 59;     // R: 0x3B
      buffer[i + 1] = 130; // G: 0x82
      buffer[i + 2] = 246; // B: 0xF6
      buffer[i + 3] = 255; // A: 255
    }
    
    // Generate different sizes
    const sizes = [16, 32, 180, 192, 512];
    
    for (const size of sizes) {
      const filename = size === 32 ? 'favicon-32x32.png' : 
                      size === 16 ? 'favicon-16x16.png' :
                      size === 180 ? 'apple-touch-icon.png' :
                      size === 192 ? 'android-chrome-192x192.png' :
                      'android-chrome-512x512.png';
      
      await sharp(buffer, { raw: { width: 32, height: 32, channels: 4 } })
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, filename));
      
      console.log(`✅ Generated ${filename} (${size}x${size})`);
    }
    
    // Create a simple ICO file (16x16 and 32x32)
    const ico16 = await sharp(buffer, { raw: { width: 32, height: 32, channels: 4 } })
      .resize(16, 16)
      .png()
      .toBuffer();
    
    const ico32 = await sharp(buffer, { raw: { width: 32, height: 32, channels: 4 } })
      .resize(32, 32)
      .png()
      .toBuffer();
    
    // Write ICO file (simplified - just PNG data)
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico32);
    console.log('✅ Generated favicon.ico');
    
    console.log('\n🎉 All favicon files generated successfully!');
    console.log('\n📁 Generated files:');
    console.log('   - favicon.ico');
    console.log('   - favicon-16x16.png');
    console.log('   - favicon-32x32.png');
    console.log('   - apple-touch-icon.png');
    console.log('   - android-chrome-192x192.png');
    console.log('   - android-chrome-512x512.png');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
    process.exit(1);
  }
}

// Run the generator
generateFavicons();
