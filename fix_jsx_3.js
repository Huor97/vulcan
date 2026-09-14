const fs = require('fs');
const pages = ['architecture', 'transport', 'branding'];
for (const p of pages) {
  const file = `src/app/${p}/page.tsx`;
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/checked="[^"]*"/gi, '');
  content = content.replace(/required="[^"]*"/gi, '');
  content = content.replace(/tabIndex="[^"]*"/gi, '');
  content = content.replace(/tabindex="[^"]*"/gi, '');
  
  fs.writeFileSync(file, content);
}
