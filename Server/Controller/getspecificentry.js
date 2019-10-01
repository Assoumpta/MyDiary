 import Models from '../Models/db';
 
const specific = function (req, res) {
    const found = Models.find(function (item) {
<<<<<<< HEAD
        return item.id === parseInt(req.params.id);
    });
    if (found) {
         res.status(200).json(found);
    
=======
 return item.id === parseInt(req.params.id);
});
    if (found) {
         res.status(200).json(found);
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
    
} 
else {
        return res.status(404).send({
            status: 404,
            message: 'Index not found',
      
    });
    }
};
module.exports = specific;
