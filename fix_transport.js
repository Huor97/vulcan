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
  
  jsx = jsx.replace(/<img([^>]+?)(?<!\/)>/g, '<img$1 />');
  jsx = jsx.replace(/<hr([^>]+?)(?<!\/)>/g, '<hr$1 />');
  jsx = jsx.replace(/<br([^>]+?)(?<!\/)>/g, '<br$1 />');
  jsx = jsx.replace(/<input([^>]+?)(?<!\/)>/g, '<input$1 />');
  
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  jsx = jsx.replace(/<script>[\s\S]*?<\/script>/g, '');
  jsx = jsx.replace(/onSubmit="[^"]*"/g, '');
  jsx = jsx.replace(/onClick="[^"]*"/g, '');
  jsx = jsx.replace(/onChange="[^"]*"/g, '');
  
  jsx = jsx.replace(/selected="true"/g, 'selected');
  jsx = jsx.replace(/selected="false"/g, '');
  
  jsx = jsx.replace(/checked="[^"]*"/gi, '');
  jsx = jsx.replace(/required="[^"]*"/gi, '');
  jsx = jsx.replace(/tabIndex="[^"]*"/gi, '');
  jsx = jsx.replace(/tabindex="[^"]*"/gi, '');
  
  jsx = jsx.replace(/style="([^"]+)"/g, (match, styleString) => {
    const parts = styleString.split(';').filter(Boolean);
    const styleObj = parts.map(p => {
      const [key, val] = p.split(':').map(s => s.trim());
      const camelKey = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return `"${camelKey}": "${val}"`;
    }).join(', ');
    return `style={{ ${styleObj} }}`;
  });

  // Fix selected on option
  jsx = jsx.replace(/<select([^>]*)id="declared-value"([^>]*)>(.*?)<option selected value="5000000"/g, '<select$1id="declared-value"$2 defaultValue="5000000">$3<option value="5000000"');
  
  return jsx;
}

const raw = fs.readFileSync(`docs/screens/transport.html`, 'utf8');
const main = extractMain(raw);
const jsxMain = toJsx(main);

const comp = `import Link from "next/link";\n\nexport default function TransportPage() {\n  return (\n    ${jsxMain}\n  );\n}`;

fs.writeFileSync(`src/app/transport/page.tsx`, comp);
