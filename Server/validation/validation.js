import joi from 'joi';

const entryvalidation = {
    validate(schema) {
        const newentry= {
          
            title: joi.string().trim().required(),
        description: joi.string().trim().required(),
        };
        return joi.validate(schema, newentry);
    },
   };
   export default entryvalidation;