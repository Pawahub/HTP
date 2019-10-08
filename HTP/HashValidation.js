'use strict';

const person = {
    address: 'Grodno',
    firstName: 'Ivan',
    lastName: 'Ivanov',
    age: 30,
    weight: 50,
};

const PersonSchema = {
    address: 'string',
    firstName: 'string',
    lastName: 'string',
    age: 'number',
    weight: 'number',
};

const validateData = {
    extraKeys: [],
    missingKeys: [],
    correctValues: [],
    incorrectlyEnteredFields: [],
};

const validateBySchema = (hash, schema) => {
    let schemaKey = Object.keys(schema),
        hashKey = Object.keys(hash);
    if (schemaKey.length !== hashKey.length) {
        console.log('Here even the number of fields does not match, but');
    }
    for (let key in schema) {
        if (!hashKey.includes(key)) {
            validateData.missingKeys.push(key);
        }
    }
    for (let key in hash) {
        if (schemaKey.includes(key)) {
            if (typeof hash[key] !== schema[key]) {
                validateData.incorrectlyEnteredFields.push(key);
            } else {
                validateData.correctValues.push(key);
            }
        } else  {
            validateData.extraKeys.push(key);
        }
    }
    return result(validateData);
};

const result = (validateData) => {
    let message = '';
    for (let key in validateData) {
        if (validateData[key].length !== 0) {
            message = message + `In this hash has ${key}: '${validateData[key]}'\n`;
        }
    }
    return console.log(message);
};

validateBySchema(person, PersonSchema);