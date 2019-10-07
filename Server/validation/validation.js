import joi from 'joi';

const entryvalidation = {
    validateString(req, res, next) {
        const testString = /^[a-zA-z]+$/.test(req.body.title.toString());
        console.log(testString)
        if (!testString) return res.status(400).send('error');
        return next();
    },
    validate(schema) {
        const newentry= {
          
        title: joi.string().trim().required(),
        description: joi.string().trim().required(),
        };

        return joi.validate(schema, newentry);
    },
   };
   export default entryvalidation;