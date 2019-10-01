import Models from '../Models/db';

<<<<<<< HEAD

  const addentry = function (req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        descrition: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        description: 'message is required',
      });
    }
    
    
=======
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
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
   const addentry = {
     id: Models.length + 1,
     title: req.body.title,
     description: req.body.description,
   };
   Models.push(addentry);
   return res.status(201).send({
     success: 'true',
<<<<<<< HEAD
     message: ' entry added successfully',
     addentry,
   });
  };

  module.exports = addentry;
=======
     message: 'entry added successfully',
     addentry,
     });
  };
module.exports = addentry;
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
