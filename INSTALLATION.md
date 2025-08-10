# Installation Guide for SEO Optimizations

This guide will help you set up and use all the SEO features implemented in your portfolio.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Generate Favicons

```bash
npm run generate-favicons
```

**Note**: This requires the `sharp` package. If you encounter issues, install it manually:

```bash
npm install sharp
```

### 3. Start Development Server

```bash
npm run dev
```

## 📁 File Structure

After installation, you should have:

```
public/
├── favicon.svg              # SVG favicon
├── favicon.ico              # ICO favicon (generated)
├── favicon-16x16.png       # 16x16 PNG favicon
├── favicon-32x32.png       # 32x32 PNG favicon
├── apple-touch-icon.png    # 180x180 Apple touch icon
├── android-chrome-192x192.png  # 192x192 Android icon
├── android-chrome-512x512.png  # 512x512 Android icon
├── robots.txt               # Search engine instructions
├── sitemap.xml              # XML sitemap
├── site.webmanifest         # PWA manifest
└── test-seo.html           # SEO test page

src/
├── components/
│   └── SEO.tsx            # SEO component
├── config/
│   └── seo.config.ts      # SEO configuration
└── ...
```

## 🔧 Usage

### Basic Usage in Pages

```tsx
import SEO from '../components/SEO';

function HomePage() {
  return (
    <>
      <SEO page="home" />
      {/* Your page content */}
    </>
  );
}
```

### Custom SEO for Specific Pages

```tsx
import SEO from '../components/SEO';

function CustomPage() {
  return (
    <>
      <SEO 
        title="Custom Title"
        description="Custom description"
        keywords="custom, keywords"
        image="/custom-image.jpg"
      />
      {/* Your page content */}
    </>
  );
}
```

### Available Page Configurations

- `home` - Home page
- `about` - About page
- `experience` - Experience page
- `projects` - Projects page
- `profile` - Profile page
- `contact` - Contact page

## 🌐 Domain Configuration

### Update URLs

Replace `shivanshu-portfolio.com` with your actual domain in:

1. `src/config/seo.config.ts`
2. `public/sitemap.xml`
3. `public/robots.txt`
4. `index.html` (meta tags)

### Example Update

```typescript
// Before
url: "https://shivanshu-portfolio.com/"

// After
url: "https://yourdomain.com/"
```

## 📱 Social Media Images

### Create Social Media Images

For optimal social media sharing, create images with these dimensions:

- **Facebook/LinkedIn**: 1200x630px
- **Twitter**: 1200x600px
- **General OG Image**: 1200x630px

### Update Image Paths

Update the image paths in `src/config/seo.config.ts`:

```typescript
image: "https://yourdomain.com/og-image.jpg"
```

## 🔍 Testing SEO

### 1. Browser Developer Tools

1. Open your page in the browser
2. Right-click and select "Inspect"
3. Go to the "Elements" tab
4. Check the `<head>` section for meta tags

### 2. SEO Test Page

Visit `/test-seo.html` to verify basic SEO implementation.

### 3. Online SEO Tools

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 📊 Monitoring

### Google Search Console

1. Add your property to [Google Search Console](https://search.google.com/search-console)
2. Submit your sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing and performance

### Analytics

Consider adding Google Analytics or similar tools to track:

- Page views
- User behavior
- Search performance
- Core Web Vitals

## 🚨 Troubleshooting

### Favicon Not Showing

1. Check if favicon files exist in `public/` folder
2. Clear browser cache
3. Verify file paths in `index.html`

### Meta Tags Not Updating

1. Ensure SEO component is imported and used
2. Check browser console for errors
3. Verify component props are correct

### Sitemap Issues

1. Check `public/sitemap.xml` exists
2. Verify URLs are correct
3. Submit to Google Search Console

## 📈 Next Steps

### Performance Optimization

1. Optimize images (WebP format)
2. Implement lazy loading
3. Add service worker for PWA
4. Monitor Core Web Vitals

### Content Strategy

1. Regular blog posts
2. Project case studies
3. Technical tutorials
4. Industry insights

### Link Building

1. GitHub profile optimization
2. LinkedIn content sharing
3. Technical community participation
4. Guest posting opportunities

## 📚 Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Web.dev SEO](https://web.dev/learn/seo/)
- [Mozilla SEO](https://developer.mozilla.org/en-US/docs/Glossary/SEO)

---

**Need Help?** Check the `SEO_README.md` for detailed technical information.
