'use strict';

const isHappyNumber = (number) => {
    let newNumber = number;
    const count = (iteration) => {
        if (iteration !== 0) {
            let str = String(newNumber),
                arr = Array.from(str);
            newNumber = arr.reduce(
                (sum, n) => sum + n * n, 0
            );
            if (newNumber === 1) {
                console.log(`The ${number} is a HappyNumber`);
                return true
            } else {
                count(iteration - 1);
            }
        } else {
            console.log(`The ${number} is not a HappyNumber`);
            return false
        }
    };
    return count(100);
};

isHappyNumber(19);