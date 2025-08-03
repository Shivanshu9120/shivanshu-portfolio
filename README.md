# Shivanshu Singh - Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, modern design, and excellent user experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Lucide Icons**: Beautiful, customizable icons
- **Theme Toggle**: Dark/Light mode support
- **Scroll Progress**: Visual scroll indicator
- **Contact Form**: Integrated contact functionality

## 📋 Pages

- **Home**: Hero section, featured projects, testimonials
- **Projects**: Portfolio showcase with filtering
- **About**: Personal story, skills, interests
- **Experience**: Work history and achievements
- **Contact**: Contact form and information

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Contact**: EmailJS integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shivanshu-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Hero.tsx       # Hero section component
│   ├── Navbar.tsx     # Navigation component
│   ├── ProjectCard.tsx # Project card component
│   ├── ThemeToggle.tsx # Theme toggle component
│   ├── ScrollProgress.tsx # Scroll progress indicator
│   └── LoadingSpinner.tsx # Loading animation
├── pages/              # Page components
│   ├── Home.tsx       # Home page
│   ├── Projects.tsx   # Projects page
│   ├── About.tsx      # About page
│   ├── Experience.tsx # Experience page
│   ├── Contact.tsx    # Contact page
│   └── Profile.tsx    # Profile page
├── context/            # React context
│   └── ThemeContext.tsx # Theme context provider
├── config/             # Configuration files
│   └── emailjs.ts     # EmailJS configuration
├── App.tsx            # Main app component
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Content
Update the content in each component to match your information:
- Personal details in `About.tsx`
- Project information in `Projects.tsx`
- Work experience in `Experience.tsx`
- Contact details in `Contact.tsx`

### Styling
Custom styles can be added in `src/index.css` using Tailwind's `@layer` directive.

## 📦 Build

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

The site can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

## 👨‍💻 About the Developer

**Shivanshu Singh** is a passionate Full Stack Developer with expertise in modern web technologies. This portfolio showcases his skills, projects, and professional journey.

---

⭐ If you find this portfolio helpful, please give it a star! 