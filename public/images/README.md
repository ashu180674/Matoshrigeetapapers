# Product Images

This folder is for storing product images locally.

Currently, the website uses high-quality images from Unsplash (free stock photos):
- Tissue Paper
- Napkin Paper  
- Paper Cups

## To use local images:

1. Download your product images
2. Save them in this folder (`public/images/`)
3. Update `src/components/Products.jsx` to use local paths:

```jsx
image: '/images/tissue-paper.jpg'  // instead of Unsplash URL
```

## Image Requirements:

- Recommended size: 800x600px or larger
- Format: JPG or PNG
- File names: Use lowercase with hyphens (e.g., `tissue-paper.jpg`)

