const hourglasses = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

const hourglassesLength = hourglasses.length / 2;
let aux = [];

for(let i = 0; i < hourglasses.length; i++) {
    for(let j = 0; j <= hourglassesLength; j++) {
        if (i > 0 && i < 5) {
            const hourglassesHead = hourglasses[i - 1].slice(j, j+3);
            const sumHourglassesHead = hourglassesHead.reduce((value, currentValue) => value + currentValue);

            const hourglassesBottom = hourglasses[i + 1].slice(j, j+3);
            const sumHourglassesBottom = hourglassesBottom.reduce((value, currentValue) => value + currentValue);

            const hourglassesMiddle = hourglasses[i].slice(j, j+3);

            const result = sumHourglassesHead + sumHourglassesBottom + hourglassesMiddle[1];
            aux.push(result)
        }
    }
}
console.log(Math.max.apply(null, aux))