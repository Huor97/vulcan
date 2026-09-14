const fs = require('fs');
const glob = require('fs').readdirSync;
const path = require('path');

const pages = ['architecture', 'transport', 'branding'];
for (const p of pages) {
  const file = `src/app/${p}/page.tsx`;
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix event handlers
  content = content.replace(/onsubmit=/g, 'onSubmit=');
  content = content.replace(/onclick=/g, 'onClick=');
  content = content.replace(/onchange=/g, 'onChange=');
  
  // Fix boolean attributes
  content = content.replace(/selected="selected"/g, 'selected');
  content = content.replace(/selected=""/g, 'selected');
  content = content.replace(/checked="checked"/g, 'defaultChecked');
  
  // Fix styles
  // We look for style="key: value; key2: value2"
  content = content.replace(/style="([^"]+)"/g, (match, styleString) => {
    const parts = styleString.split(';').filter(Boolean);
    const styleObj = parts.map(p => {
      const [key, val] = p.split(':').map(s => s.trim());
      // basic camel case
      const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return `"${camelKey}": "${val}"`;
    }).join(', ');
    return `style={{ ${styleObj} }}`;
  });
  
  fs.writeFileSync(file, content);
}
