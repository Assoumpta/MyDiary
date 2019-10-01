import Models from '../Models/db';

<<<<<<< HEAD
const deleteentry = function (req, res) {
=======
const deleteentry = function (req, res){
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
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
<<<<<<< HEAD
 
  module.exports = deleteentry;
=======
 module.exports = deleteentry;
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
