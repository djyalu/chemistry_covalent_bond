const fs = require('fs');

const content = fs.readFileSync('problems.js', 'utf8');
const lines = content.split('\n');
let currentCategory = '';
let counts = {};

for (let line of lines) {
    if (line.includes('category: ')) {
        const match = line.match(/category: '([^']+)'/);
        if (match) {
            currentCategory = match[1];
            if (!counts[currentCategory]) counts[currentCategory] = 0;
        }
    }
    if (line.includes('question:') && currentCategory) {
        counts[currentCategory]++;
    }
}

console.log('카테고리별 문제 개수:');
for (let cat in counts) {
    console.log(cat + ': ' + counts[cat] + '개');
}
let total = Object.values(counts).reduce((a,b) => a+b, 0);
console.log('총 문제 개수: ' + total + '개');