import Models from '../Models/db';

const getAll = (req, res) => {
    if (!Models) {
        return res.status(404).send({
            status: 404,
            error: 'no entries found',
          });
    } else {
         res.status(200).send({
        status: 200,
             Models,
        });
    }
 };
 module.exports = getAll;
