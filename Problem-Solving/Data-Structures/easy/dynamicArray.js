let queries = [
  [ 2, 5 ],
  [ 1, 0, 5 ],
  [ 1, 1, 7 ],
  [ 1, 0, 3 ],
  [ 2, 1, 0 ],
  [ 2, 1, 1 ]
];

function dynamicArray(n, queries) {
  let lastAnswer = 0;
  let arr = Array(n).fill().map(e => []);
  let answers = [];

  queries.forEach(querie => {
    const x = querie[1];
    const y = querie[2];
    let idx = (x ^ lastAnswer) % n;

    if (querie[0] === 1) {
      arr[idx].push(y);
    }

    if (querie[0] === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];

      if (lastAnswer) answers.push(lastAnswer);
    }
  });

  return answers;
}

console.log('answers: ', dynamicArray(2, queries));