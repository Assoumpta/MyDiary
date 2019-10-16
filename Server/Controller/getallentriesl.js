// import Models from '../Models/db';
import { pool } from '../Database/database';

const getAll = (req, res) => {
    pool.connect((err, user, done) => {
        const query = 'SELECT * FROM allentries';
        user.query(query, (error, result) => {
          done();
          if (error) {
            res.status(400).json({ error });
          } 
          if (result.rows < '1') {
            res.status(404).send({
            status: 'Failed',
            message: 'No entry found',
            });
        } else {
            res.status(200).send({
            status: 'Successful',
            message: 'All data entries retrieved from database',
            students: result.rows,
            });
          }
        });
      });
    };
export default getAll;
