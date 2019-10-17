
import { pool } from '../Database/database';
import entryvalidation from '../validation/validation';


const addentry = (req, res) => {
  const { error } = entryvalidation.validate(req.body);
  if (error) {
   return res.status(400).json({ status: 400, error: error.details[0].message });
  }
  const data = {
   entry_title: req.body.title,
   entry_message: req.body.description,
  };

  pool.connect((err, user, done) => {
    const query = 'INSERT INTO allentries(entry_title, entry_message) VALUES($1,$2) RETURNING *';
    const values = [data.entry_title, data.entry_message];

    user.query(query, values, (error, result) => {
      done();
      if (error) {
        res.status(400).json({ error });
      }
      res.status(202).send({
        status: 'SUccessful',
        result: result.rows[0],
      });
    });
  });
 
};
  export default addentry;
