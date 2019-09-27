import Models from '../Models/db';

const addentry = (req, res) => {
      if (!req.body.title) {
         return res.status(400).send({
          success: 'false',
          description: 'title is required',
        });
 } 
else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        description: 'message is required',
});
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
