import { pool } from '../Database/database';

const specific = function (req, res) {

    const id = parseInt(req.params.id, 10);
pool.connect((err, user, done) => {
  const values = [id];
  const query = 'SELECT * FROM allentries WHERE id = $1;';
  user.query(query, values, (error, result) => {
    done();
    if (error) {
      return res.status(400).json({ error });
    }
    if (result.rows < '1') {
      return res.status(404).send({
        status: 404,
        message: 'No entry found',
      });
    } else {
      return res.status(200).send({
        status: 200,
        message: 'Entry for this id is  Succsesfully retrieved',
        entries: result.rows,
      });

    }
  });
});

};
module.exports = specific;
