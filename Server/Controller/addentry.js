import Models from '../Models/db';


  const add = function(req, res)  {
    if(!req.body.title) {
      return res.status(400).send({
        success: 'false',
        descrition: 'title is required'
      });
    } else if(!req.body.description) {
      return res.status(400).send({
        success: 'false',
        description: 'message is required'
      });
    }
    
    
   const add = {
     id: Models.length + 1,
     title: req.body.title,
     description: req.body.description
   }
   Models.push(add);
   return res.status(201).send({
     success: 'true',
     message: ' entry added successfully',
     add
   })
  };

  module.exports=add;


    