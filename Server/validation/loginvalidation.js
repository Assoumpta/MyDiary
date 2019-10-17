import joi from 'joi';

const loginvalidation = {
       validate(addUser) {
           const newItem = {
               Username: joi.string().trim().required(),
               Password: joi.string().trim().required(),
           };
           return joi.validate(addUser, newItem);
       },
   };
export default loginvalidation;
