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
    wrongVal: [],
    correctVal: [],
};

const result = (validateData) => {
    let message = 'In this hash ';
    if (validateData.extraKeys.length === 1) {
        message = message + `has an extra key '${validateData.extraKeys}'\n`;
    } else if (validateData.extraKeys.length > 1) {
        message = message + `has an extra keys: '${validateData.extraKeys}'\n`;
    }
    if (validateData.missingKeys.length === 1) {
        message = message + `schema key '${validateData.missingKeys}' is missing\n`;
    } else if (validateData.missingKeys.length > 1) {
        message = message + `schema keys: '${validateData.missingKeys}' are missing\n`;
    }
    if (validateData.wrongVal.length === 1) {
        message = message + `key '${validateData.wrongVal}' entered incorrectly\n`;
    } else if (validateData.wrongVal.length > 1) {
        message = message + `keys: '${validateData.wrongVal}' entered incorrectly\n`;
    }
    if (validateData.correctVal.length === 1) {
        message = message + `key '${validateData.correctVal}' match the value\n`;
    } else if (validateData.correctVal.length > 1) {
        message = message + `keys: '${validateData.correctVal}' match the values\n`;
    }
    return console.log(message);
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
                validateData.wrongVal.push(key);
            } else {
                validateData.correctVal.push(key);
            }
        } else  {
            validateData.extraKeys.push(key);
        }
    }
    return result(validateData);
};

validateBySchema(person, PersonSchema);