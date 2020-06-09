function sumPrimes(num) {
    const primes = [];
    for (let numerator = 2; numerator <= num; numerator++) {
        let shouldPushNum = true;

        for (
            let denominator = 2;
            denominator <= numerator;
            denominator++
        ) {
            if (
                numerator % denominator === 0
                && numerator !== denominator
            ) {
                shouldPushNum = false;
            }
        }

        if (shouldPushNum) {
            primes.push(numerator)
        }
    }

    return primes.reduce((a, b) => a + b)
}

console.log(sumPrimes(9));
