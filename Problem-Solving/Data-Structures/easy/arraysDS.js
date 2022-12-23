const a = [1, 4, 3, 2];

const invertedArray = [];

for (let i = a.length - 1; i >= 0; i--) {
    invertedArray.push(a[i])
}

console.log(invertedArray)