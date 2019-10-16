// 'use strict';
//
// const person = {
//     address: 'Grodno',
//     firstName: 'Ivan',
//     lastName: 'Ivanov',
//     age: 30,
//     weight: 50,
//     aweight: 50,
// };
//
// const PersonSchema = {
//     address: 'string',
//     firstName: 'string',
//     lastName: 'string',
//     age: 'number',
//     weight: 'number',
// };
//
// let status = false;
//
// const validateBySchema = (hash, schema) => {
//
//     let schemaKey = Object.keys(schema),
//         hashKey = Object.keys(hash);
//
//     const validateData = {
//         extraKeys: [],
//         missingKeys: [],
//         correctValues: [],
//         wrongValues: [],
//     };
//
//     if (schemaKey.length !== hashKey.length) status = 'wrongQty';
//
//     for (let key in schema) {
//         if (!hashKey.includes(key)) validateData.missingKeys.push(key);
//     }
//
//     for (let key in hash) {
//         if (schemaKey.includes(key))
//             if (typeof hash[key] !== schema[key]) validateData.wrongValues.push(key);
//             else validateData.correctValues.push(key);
//         else validateData.extraKeys.push(key);
//     }
//
//     if (validateData.correctValues.length === hashKey.length && hashKey.length === schemaKey.length) return status = true;
//
//     return validateData;
// };
//
// const result = (validateData) => {
//
//     let message = '';
//
//     if (status === true) return message = 'All values are correct. Hash match.';
//     else if (status === 'wrongQty') message = `Here even the number of fields does not match, but hash has:\n`;
//     else message = 'This hash has:\n';
//
//     for (let key in validateData) {
//         if (validateData[key].length !== 0) {
//             message = message + `  ${key}: '${validateData[key]}'\n`;
//         }
//     }
//     return message;
// };
//
// console.log(result(validateBySchema(person, PersonSchema)));