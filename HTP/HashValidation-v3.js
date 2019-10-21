'use strict';

const person = {
    address: 'Grodno',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 30,
    weight: 100,
};

const PersonSchema = {
    address: 'string',
    firstName: 'string',
    lastName: 'string',
    age: 'number',
    weight: 'number',
};

class ValidateData {

    constructor (hash, schema) {
        this.schemaKeys = Object.keys(schema);
        this.hashKeys = Object.keys(hash);
        this.schemaValues = Object.values(schema);
        this.hashValues = Object.values(hash);
        this.schemaItems = this.zip(this.schemaKeys, this.schemaValues);
    }

    typeOfValues () {
        return this.zip(this.hashKeys, this.hashValues).filter(key => this.schemaKeys.includes(key[0])).map(item => [item[0], typeof item[1]]);
    }

    missingKeys () {
        return this.schemaKeys.filter(key => !(this.hashKeys.includes(key)));
    }

    extraKeys () {
        return this.hashKeys.filter(key => !(this.schemaKeys.includes(key)));
    }

    wrongValues () {
        return this.zip(this.typeOfValues(), this.bool()).filter(item => item[1] === false).map(item => item[0].shift());
    }

    zip (a, b) {
        let arr = [];
        for (let item in a) arr.push([a[item], b[item]]);
        return arr;
    }

    bool () {
        return this.typeOfValues().map((item) => {
            let arr = this.schemaItems.filter(prop => prop.includes(item[0]));
            if (arr) return item[1] === arr[0][1];
        });
    }

    hashMatch () {
        return this.bool().reduce((accumulator, currentValue) => accumulator && currentValue);
    }

    lengthMatch () {
        return this.schemaKeys.length === this.hashKeys.length;
    }
}

const validate = () => {
    let message = '';
    if (result.lengthMatch() && result.hashMatch()) return message = 'All values are correct. Hash match the schema.';
    else if (result.lengthMatch() === false) message = `Here even the number of fields does not match, but this hash has:\n`;
    else message = 'This hash has:\n';
    if (result.missingKeys().length !== 0) message = message + `  these missing keys: ${result.missingKeys()}\n`;
    if (result.extraKeys().length !== 0) message = message + `  these extra keys: ${result.extraKeys()}\n`;
    if (result.wrongValues().length !== 0) message = message + `  these wrong values: ${result.wrongValues()}\n`;
    message = message + `Other fields match the schema.`;
    return message;
};

let result = new ValidateData(person, PersonSchema);

console.log(validate(result));