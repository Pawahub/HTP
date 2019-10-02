'use strict';

const checkTheNumber = () => {
    let newNumber = number;
    const count = (iteration) => {
        if (iteration !== 0) {
            let arr = [];
            for (let num = newNumber; num > 0; num /= 10, num = Math.floor(num)) {
                arr.unshift(num % 10);
            }
            newNumber = arr.reduce(
                (sum, n) => sum + n * n, 0
            );
            if (newNumber === 1) {
                newNumber = true;
                return true;
            } else {
                count(iteration - 1);
            }
        } else {
            newNumber = false;
            return false;
        }
        return newNumber;
    };
    return count(100);
};

let number = 189;

checkTheNumber(number);

if (checkTheNumber(number)) {
    console.log(`The ${number} is a HappyNumber`);
} else {
    console.log(`The ${number} is not a HappyNumber`);
}