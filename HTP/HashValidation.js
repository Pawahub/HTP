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

    if (Object.keys(schema).length > Object.keys(hash).length) {
        console.log('Не заполнено одно поле!');
        return false;
    } else if (Object.keys(schema).length < Object.keys(hash).length) {
        console.log('Введено лишнее значение!');
        return false;
    }

    for (let key in hash) {
        if (typeof hash[key] !== schema[key]) {
            console.log(`Поле ${key} заполнено некорректно!`);
            return false;
        }
    }
    return result;
};

console.log(validateBySchema(person, PersonSchema));