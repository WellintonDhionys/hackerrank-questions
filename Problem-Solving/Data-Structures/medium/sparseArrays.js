const stringList = ['aba', 'baba', 'aba', 'xzxb'];
const stringQueries = ['aba', 'xzxb', 'ab'];
let results = [];

stringQueries.forEach(element => {
    const total = stringList.filter(value => value === element);
    results.push(total.length);
});

console.log(results)