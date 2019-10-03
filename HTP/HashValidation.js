'use strict';

const person = {
    address: 'Grodno',
    firstName: 'Ivan',
    lastName: 'Pupkin',
    age: 34,
    weight: 50,
};

const PersonSchema = {
    address: 'string',
    firstName: 'string',
    lastName: 'string',
    age: 'number',
    weight: 'number',
};

const validateBySchema = (hash, schema) => {
    let result = true;
    const keys = Object.keys(schema);
    for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const value = hash[key];
        const fieldType = schema[key];
        result = result && typeof value === fieldType;
    }
    return result;
};

console.log(validateBySchema(person, PersonSchema));

console.log(Object.keys(person));