@echo off
echo ========================================
echo    SEO Setup Script for Portfolio
echo ========================================
echo.

echo Installing dependencies...
npm install

echo.
echo Installing sharp package for favicon generation...
npm install sharp

echo.
echo Generating favicons...
npm run generate-favicons

echo.
echo ========================================
echo    Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Update domain URLs in seo.config.ts
echo 2. Create social media images (1200x630px)
echo 3. Test your site with npm run dev
echo 4. Submit sitemap to Google Search Console
echo.
echo Check INSTALLATION.md for detailed instructions.
echo.
pause
