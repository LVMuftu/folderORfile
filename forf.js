const fs = require('fs');

const isDirectory = (path) => {
  try {
    const stats = fs.statSync(path);
    return stats.isDirectory();
  } catch (error) {
    return false;
  }
};

// Örnek kullanım
const filePath = '/ana/klasor/dosya.txt';
const directoryPath = '/ana/klasor';

console.log(isDirectory(filePath));     // false (dosya)
console.log(isDirectory(directoryPath)); // true (klasör)
