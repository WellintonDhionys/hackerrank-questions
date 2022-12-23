const candles = [4, 4, 1, 3];

const highestValueCandles = Math.max.apply(null, candles);
let qtd = 0;
candles.map(value => {
    if (value === highestValueCandles) qtd++
})

console.log(qtd)