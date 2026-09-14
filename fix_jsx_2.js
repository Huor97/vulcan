const fs = require('fs');
const pages = ['architecture', 'transport', 'branding'];
for (const p of pages) {
  const file = `src/app/${p}/page.tsx`;
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove event handlers completely for now to get a clean static build
  content = content.replace(/onSubmit="[^"]*"/g, '');
  content = content.replace(/onClick="[^"]*"/g, '');
  content = content.replace(/onChange="[^"]*"/g, '');
  
  // Fix boolean selected attributes that are strings
  content = content.replace(/selected="true"/g, 'selected');
  content = content.replace(/selected="false"/g, '');
  content = content.replace(/selected="[^"]*"/g, 'selected'); // anything else just gets selected
  
  // Fix tabIndex string vs number
  content = content.replace(/tabindex="([^"]+)"/gi, 'tabIndex={$1}');
  
  fs.writeFileSync(file, content);
}
