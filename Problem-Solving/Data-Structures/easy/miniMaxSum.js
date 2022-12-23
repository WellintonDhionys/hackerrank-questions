function miniMaxSum(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < arr.length; j++) {
            if (j === i) {
                continue;
            }

            sum += arr[j]
        }

        result.push(sum)
    }

    result.sort()

    console.log(`${result.shift()} ${result.pop()}`)
}

const arr = [1, 3, 5, 7, 9];
miniMaxSum(arr)