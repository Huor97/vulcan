const fs = require('fs');

const file = `src/app/transport/page.tsx`;
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/onclick="[^"]*"/g, '');
content = content.replace(/onchange="[^"]*"/g, '');
content = content.replace(/selected="selected"/g, 'selected');
content = content.replace(/selected="[^"]*"/g, 'selected'); // clean up weird selected values
// Wait, the select needs defaultValue not selected.
// I'll just strip selected="selected" completely because the option doesn't need it.
content = content.replace(/selected/g, ''); 

fs.writeFileSync(file, content);
