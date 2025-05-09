# Icon Navigation Website

This is a simple website template featuring icon-based navigation on the homepage.

## Features

- Responsive design
- Icon-based navigation
- Smooth scrolling to sections
- Active state highlighting

## Structure

- `index.html` - Main HTML structure
- `styles.css` - CSS styling
- `script.js` - JavaScript functionality
- `images/` - Directory for custom icons and images

## How to Use

1. Open `index.html` in your web browser to view the website
2. Modify the HTML, CSS, and JavaScript files to customize the website
3. Replace Font Awesome icons with custom icons if desired

## Customization

### Adding New Navigation Items

To add a new navigation item, add the following code to the `<nav class="icon-navigation">` section in `index.html`:

```html
<div class="nav-item">
    <a href="#your-section-id">
        <i class="fas fa-icon-name"></i>
        <span>Section Name</span>
    </a>
</div>
```

Then add a corresponding section:

```html
<section id="your-section-id" class="section">
    <h2>Section Title</h2>
    <p>Section content goes here.</p>
</section>
```

### Using Custom Icons

If you want to use custom icons instead of Font Awesome:

1. Place your icon images in the `images/` directory
2. Replace the Font Awesome icon with an image tag:

```html
<img src="images/your-icon.png" alt="Icon description">
```

3. Adjust the CSS as needed to style your custom icons

## Resources

- [Font Awesome](https://fontawesome.com/) - For icons
- [Google Fonts](https://fonts.google.com/) - For custom typography