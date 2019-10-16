import joi from 'joi';

const signupvalidation = {
       validate(addUser) {
           const newItem = {
               Email: joi.string().trim().required(),
               Username: joi.string().trim().required(),
               Password: joi.string().trim().required(),
           };
           return joi.validate(addUser, newItem);
       },
   };
   export default signupvalidation;
