import { pool } from '../Database/database';
import entryvalidation from '../validation/validation';

const modifyentry = async (req, res) => {
  const { error } = entryvalidation.validate(req.body);
  if (error) {
      return res.status(400).json({ status: 400, error: error.details[0].message });
  }
  
  const ID = parseInt(req.params.id);
  const updated = {
    entry_title: req.body.title,
    entry_message: req.body.description,
  };
  const query = 'UPDATE allentries SET entry_title=$1,entry_message=$2 WHERE id=$3 RETURNING *';
  const values = [updated.entry_title, updated.entry_message, ID];
  const update = await pool.query(query, values);
  if (update.rows === 1) {
      res.status(404).json({
          status: 404,
          message: 'Entry not found',
      });
  } else {
      res.status(200).json({
          status: 200,
          message: 'Entry updated successfully',
          entry: update.rows[0],
      });
  }
};
export default modifyentry;
