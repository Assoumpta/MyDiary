import Models from '../Models/db';

const deleteentry = function (req, res){
    const id = parseInt(req.params.id, 10);
  
    Models.map((db, index) => {
      if (db.id === id) {
         Models.splice(index, 1);
         return res.status(200).send({
           success: 'true',
           message: 'Entry  deleted successfuly',
         });
      }
    
  
  else {
    return res.status(404);
  }
});
  };
 module.exports = deleteentry;
