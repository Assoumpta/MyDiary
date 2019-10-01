import Models from '../Models/db';

const getAll = (req, res) => {
    if (!Models) {
        return res.status(404).send({
            status: 404,
            error: 'no entries found',
          });
    } else {
         res.status(200).send({
<<<<<<< HEAD
            status: 200,
=======
        status: 200,
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
             Models,
        });
    }
 };
<<<<<<< HEAD
 
=======
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
 module.exports = getAll;
