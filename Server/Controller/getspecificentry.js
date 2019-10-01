 import Models from '../Models/db';
 
const specific = function (req, res) {
    const found = Models.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
         res.status(200).json(found);
    
    
    } else {
        return res.status(404).send({
            status: 404,
            message: 'Index not found',
      
    });
    }
};
module.exports = specific;
