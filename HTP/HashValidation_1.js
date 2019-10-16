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

let result = false;

const validateBySchema = (hash, schema) => {

    let schemaKeys = Object.keys(schema),
        hashKeys = Object.keys(hash),
        schemaItems = Object.values(schema),
        hashItems = Object.values(hash);

    const validateData = {
        typeOfItems: hashItems.map(item => typeof item),
        missingKeys: schemaKeys.filter(key => !(hashKeys.includes(key))),
        extraKeys: hashKeys.filter(key => !(schemaKeys.includes(key))),
        wrongItems: [],
    };

    const reducer = (accumulator, currentValue) => accumulator && currentValue;

    const zip = (a, b) => {
        let arr = [];
        for (let item in a) arr.push([a[item], b[item]]);
        return arr;
    };

    let isMatch = zip(validateData.typeOfItems, schemaItems).map(item => item[0] === item[1]).reduce(reducer);

    if (schemaKeys.length === hashKeys.length) result = 'qty';

    if (result && isMatch) return result = true;
    else {
        for (let key in hash) {
            if (schemaKeys.includes(key) && typeof hash[key] !== schema[key]) validateData.wrongItems.push(key);
        }
        return validateData;
    }
};

const validate = (validateData) => {

    let message = '';

    if (result === true) return message = 'All values are correct. Hash match.';
    else if (result !== 'qty') message = `Here even the number of fields does not match, but hash has:\n`;
    else message = 'This hash has:\n';

    for (let key in validateData) {
        if (validateData[key].length !== 0 && key !== 'typeOfItems') {
            message = message + `  ${key}: '${validateData[key]}'\n`;
        }
    }
    message = message + `Other fields match the schema.`;
    return message ;
};

console.log(validate(validateBySchema(person, PersonSchema)));