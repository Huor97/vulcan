const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let c = content;
  c = c.replace(/text-\[var\(--color-vulcan-text-muted\)\]/g, 'text-on-primary/60');
  c = c.replace(/text-\[var\(--color-vulcan-primary\)\]/g, 'text-primary');
  c = c.replace(/text-\[var\(--color-vulcan-secondary\)\]/g, 'text-on-primary/80');
  c = c.replace(/text-\[var\(--color-vulcan-canvas\)\]/g, 'text-on-primary');
  
  c = c.replace(/bg-\[var\(--color-vulcan-surface\)\]/g, 'bg-primary-container');
  c = c.replace(/bg-\[var\(--color-vulcan-canvas\)\]/g, 'bg-surface-container-lowest');
  c = c.replace(/bg-\[var\(--color-vulcan-primary\)\]/g, 'bg-primary');
  
  c = c.replace(/border-\[var\(--color-vulcan-border\)\]/g, 'border-white/10');
  c = c.replace(/border-\[var\(--color-vulcan-text-muted\)\]/g, 'border-white/20');
  c = c.replace(/border-\[var\(--color-vulcan-primary\)\]/g, 'border-on-primary');

  if (c !== content) {
    fs.writeFileSync(file, c);
    console.log('Updated', file);
  }
});
