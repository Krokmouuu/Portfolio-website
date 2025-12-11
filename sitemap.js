import fs from 'fs';
import path from 'path';

const pages = [
  '',
];

const baseUrl = 'https://bleroy.dev';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join('')}
</urlset>`;

fs.writeFileSync(path.resolve('./dist/sitemap.xml'), sitemap);

console.log('Sitemap généré avec succès !');
