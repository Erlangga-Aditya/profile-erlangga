# High-End Developer Portfolio 🎨

A professional, minimal, and modern developer portfolio built with a focus on premium Apple-style design aesthetics, performance optimization, and smooth animations.

## Features ✨

- **Modern Tech Stack**: HTML5, SCSS, Vanilla JS (ES6+), Webpack.
- **Premium Design**: Apple-inspired minimal UI, high whitespace, subtle shadows, modern typography (Inter).
- **Smooth Animations**: High-performance scroll reveals and UI interactions powered by GSAP.
- **Optimized & Lightweight**: No heavy frameworks (React/Vue). Webpack handles asset compression, minification, and code splitting.
- **Responsive**: Perfect layout across all screen sizes (Desktop, Tablet, Mobile).
- **SEO & Accessibility**: Semantic HTML5 tags and meta tags included.

## Project Structure 📁

```text
portfolio/
├── dist/                          # Production build output
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── projects/
│   │   │   ├── certificates/
│   │   │   └── profile/
│   ├── styles/                    # SCSS styling
│   │   ├── main.scss
│   │   ├── animations.scss
│   │   └── variables.scss
│   ├── js/                        # JavaScript logic
│   │   ├── main.js
│   │   ├── animations.js
│   │   └── components.js
│   └── index.html                 # HTML Template
├── webpack.config.js              # Webpack build steps
└── package.json
```

## Setup Instructions 🚀

Follow these steps to run the project locally or build for production.

### 1. Install Dependencies
You'll need Node.js installed. In the project root, run:
```bash
npm install
```

### 2. Development Mode
To start a local development server with hot module replacement (HMR), run:
```bash
npm run dev
```
Your default browser will launch at `http://localhost:3000`.

### 3. Build for Production
To optimize and bundle all assets for deployment, run:
```bash
npm run build
```
This generates optimized, minified, and lightweight files in the `dist/` directory.

### 4. Vercel Deployment 🌍
This project is perfectly optimized for **Vercel** deployment out-of-the-box.
1. Create a new project on Vercel.
2. Link it to your GitHub repository containing this portfolio.
3. Configure the **Build Command** to: `npm run build`
4. Set the **Output Directory** to: `dist`
5. Deploy!

## Customizing Content 📝

You can replace all bracketed tags inside `src/index.html` (e.g., `[Developer Name]`, `[Project Title 1]`). 
Make sure to add your images to `src/assets/images/` and link them in the `<img src="...">` tags accordingly.
