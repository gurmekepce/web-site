const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://gurmekepcee.vercel.app';
const routes = ['/', '/#services', '/#about', '/#contact'];

const urls = routes.map((route) => `  <url>\n    <loc>${SITE_URL}${route}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>`).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), xml);
console.log('sitemap.xml generated');
