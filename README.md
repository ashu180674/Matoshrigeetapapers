# Matoshri Geeta Paper and Allied Industries Pvt. Ltd.

A modern, responsive frontend website for Matoshri Geeta Paper and Allied Industries Pvt. Ltd., showcasing their paper manufacturing products and services.

## Features

- 🏠 **Home Page** - Hero section with company introduction
- 📖 **About Us** - Company information and mission
- 📦 **Products** - Showcase of Tissue Paper, Napkin Paper, and Paper Cups
- 🏭 **Infrastructure/Quality** - Modern facilities and quality assurance
- 📞 **Contact Us** - Company address and contact information
- 🎨 **Modern Design** - Beautiful, responsive UI with smooth animations
- 📱 **Mobile Friendly** - Fully responsive design for all devices

## Tech Stack

- React 18
- Vite (Build tool)
- CSS3 (Modern styling with gradients and animations)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
paper/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Home.jsx         # Home section
│   │   ├── About.jsx        # About Us section
│   │   ├── Products.jsx     # Products showcase
│   │   ├── Infrastructure.jsx # Quality section
│   │   ├── Contact.jsx      # Contact information
│   │   ├── Footer.jsx       # Footer
│   │   └── Logo.jsx         # Company logo component
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── App.css              # App styles
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

## Customization

### Adding Product Images

To add product images, replace the placeholder divs in `src/components/Products.jsx`:

```jsx
<div className="product-image-placeholder">
  <img src="/path/to/image.jpg" alt={product.name} />
</div>
```

### Updating Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-green: #2d5016;
  --light-green: #90ee90;
  --warm-orange: #ff6b35;
  /* ... */
}
```

## License

© 2024 Matoshri Geeta Paper and Allied Industries Pvt. Ltd. All rights reserved.

# Matoshrigeetapapers
