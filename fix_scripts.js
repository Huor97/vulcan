const fs = require('fs');

const pages = ['architecture', 'transport', 'branding'];
for (const p of pages) {
  const file = `src/app/${p}/page.tsx`;
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<script>[\s\S]*?<\/script>/g, '');
  fs.writeFileSync(file, content);
}
