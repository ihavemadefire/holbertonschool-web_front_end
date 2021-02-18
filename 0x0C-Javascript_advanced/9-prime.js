function countPrimeNumbers() {
    let count = 1;
    let prime;
    for (let i = 2; i < 101; i++) {
        for (let j = 2; j < 101; j++) {
            if (!(i % j === 0))
                count++;
        }
    }
    return count;
}

time1 = performance.now();
countPrimeNumbers();
time2 = performance.now();
let totalTime = time2 - time1;
console.log("Execution time of printing countPrimeNumbers was " +
totalTime +
" milliseconds.");