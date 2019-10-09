import joi from 'joi';


const entryvalidation = {
    validateString(req, res, next) {
        const testing = /^[a-zA-z]+$/.test(req.body.title.toString());
        console.log(testing);
        if (!testing) return res.status(404).send('Title and Description must be string');
        return next();
    },
    validateSpace(req, res, next) {
        const testspace = /^[a-zA-z]^$/.test(req.body.title.trim());
        console.log(testspace);
        if (!testspace) return res.status(404).send('Enter title and description');
        return next();
    },
    
    validate(schema) {
        const newentry = {
          
        title: joi.string().trim().required(),
        description: joi.string().trim().required(),
        };

        return joi.validate(schema, newentry);
    },
   };
   export default entryvalidation;
