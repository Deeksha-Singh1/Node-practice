const path=require('path');

//returns the path of the file
console.log(path.dirname('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js'));

console.log(path.extname('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js'));

console.log(path.basename('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js'));

console.log(path.parse('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js'));

console.log(path.parse('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js').name);

console.log(path.parse('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js').base);

console.log(path.parse('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js').dir);

console.log(path.parse('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js').ext);

console.log(path.parse('C:/Users/DELL/OneDrive/DesktopNode-practice/PathModule/index.js').root);