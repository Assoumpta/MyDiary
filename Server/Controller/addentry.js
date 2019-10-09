import Models from '../Models/db';
import entryvalidation from '../validation/validation';


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
  ddentry = (req, res) => {
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
=======
  const { error } = entryvalidation.validate(req.body);
  if (error) {
   return res.status(400).json({ status: 400, error: error.details[0].message });
  }
>>>>>>> 3282f2463d44845a641da385708efb10f6a5766b
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
<<<<<<< HEAD
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
=======

>>>>>>> 3282f2463d44845a641da385708efb10f6a5766b
