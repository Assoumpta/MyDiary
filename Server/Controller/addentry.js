import Models from '../Models/db';
import entryvalidation from '../validation/validation';

const addentry = (req, res) => {
  const { error } = entryvalidation.validate(req.body);
  if (error) {
   return res.status(400).json({ status: 400, error: error.details[0].message });
  }
   const addentry = {
     id: Models.length + 1,
     title: req.body.title,
     description: req.body.description,
   };
   Models.push(addentry);
   return res.status(201).send({
     success: 'true',
     message: 'entry added successfully',
     addentry,
     });
  };
module.exports = addentry;
