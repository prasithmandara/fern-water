const fs = require('fs');
const html = fs.readFileSync('original_page.html', 'utf8');

const linkRegex = /href=["']([^"']+)["']/g;
const imgRegex = /src=["']([^"']+)["']/g;

const links = new Set();
let match;
while ((match = linkRegex.exec(html)) !== null) {
  if (match[1].includes('fernbottledwater.com')) {
    links.add(match[1]);
  }
}

const images = new Set();
while ((match = imgRegex.exec(html)) !== null) {
  if (match[1].includes('uploads') || match[1].includes('fern')) {
    images.add(match[1]);
  }
}

console.log('--- FOUND LINKS ---');
for (const l of links) console.log(l);

console.log('--- FOUND IMAGES ---');
for (const i of images) console.log(i);
