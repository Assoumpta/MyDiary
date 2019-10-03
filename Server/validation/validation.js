import joi from 'joi';

const entryvalidation = {
    validate(addentry) {
        const newentry= {
            //user_id : Joi.number().integer().required(),
            title: joi.string().required(),
        description: joi.string().required(),
        };
        return joi.validate(addentry, newentry);
    },
   };
   export default entryvalidation;