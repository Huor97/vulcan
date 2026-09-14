const fs = require('fs');

function extractMain(html) {
  const match = html.match(/<main[\s\S]*?<\/main>/);
  return match ? match[0] : '';
}

function toJsx(html) {
  let jsx = html;
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
  jsx = jsx.replace(/stroke-dasharray=/g, 'strokeDasharray=');
  jsx = jsx.replace(/fill-rule=/g, 'fillRule=');
  jsx = jsx.replace(/clip-rule=/g, 'clipRule=');
  jsx = jsx.replace(/viewbox=/g, 'viewBox=');
  jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
  jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
  
  // Close unclosed tags
  jsx = jsx.replace(/<img([^>]+?)(?<!\/)>/g, '<img$1 />');
  jsx = jsx.replace(/<hr([^>]+?)(?<!\/)>/g, '<hr$1 />');
  jsx = jsx.replace(/<br([^>]+?)(?<!\/)>/g, '<br$1 />');
  jsx = jsx.replace(/<input([^>]+?)(?<!\/)>/g, '<input$1 />');
  
  // Wait, some <img> might just be `<img src="...">` without attributes after src.
  // The negative lookbehind `(?<!\/)` ensures it's not already closed.
  
  // Replace HTML comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  return jsx;
}

const pages = ['architecture', 'transport', 'branding'];
for (const p of pages) {
  const raw = fs.readFileSync(`docs/screens/${p}.html`, 'utf8');
  const main = extractMain(raw);
  const jsxMain = toJsx(main);
  
  const comp = `import Link from "next/link";\n\nexport default function ${p.charAt(0).toUpperCase() + p.slice(1)}Page() {\n  return (\n    ${jsxMain}\n  );\n}`;
  
  fs.writeFileSync(`src/app/${p}/page.tsx`, comp);
}
