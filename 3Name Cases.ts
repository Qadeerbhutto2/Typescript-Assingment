// lower case
let personName: string= "qadeer";
console.log("lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// Tiltle case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));