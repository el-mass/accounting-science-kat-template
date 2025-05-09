// This script generates personalized Coca-Cola bottle SVGs
const fs = require('fs');
const path = require('path');

// Names for the bottles
const names = [
    'Recon',
    'Marginalize',
    'Michael',
    'Emma',
    'David',
    'Lisa',
    'James',
    'Olivia'
];

// Read the template SVG
const templatePath = path.join(__dirname, 'coke-bottle-template.svg');
const template = fs.readFileSync(templatePath, 'utf8');

// Generate a personalized bottle for each name
names.forEach(name => {
    // Replace the NAME placeholder with the actual name
    let personalizedSvg = template.replace('>NAME<', `>${name}<`);
    
    // Adjust font size for longer names
    if (name.length > 6) {
        const fontSize = Math.max(10, Math.floor(18 * (6 / name.length)));
        personalizedSvg = personalizedSvg.replace('font-size="18"', `font-size="${fontSize}"`);
    }
    
    // Save the personalized SVG
    const outputPath = path.join(__dirname, `${name.toLowerCase()}.svg`);
    fs.writeFileSync(outputPath, personalizedSvg);
    
    console.log(`Generated bottle for ${name}`);
});

console.log('All bottles generated successfully!');