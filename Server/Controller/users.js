import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import signupvalidation from '../validation/signupvalidation';
import loginvalidation from '../validation/loginvalidation';
import { pool } from '../Database/database';

const addUser = async (req, res) => {
   const { error } = signupvalidation.validate(req.body);
   if (error) {
       return res.status(400).json({ status: 400, error: error.details[0].message });
   }
   const etaken = req.body.Email;
   const findemail = 'SELECT * FROM signuptable WHERE Email= $1';
   const user = await pool.query(findemail, [etaken]);
   if (user.rows[0]) {
       return res.status(400).send({
           status: 400,
         message: 'User inserted succesfully,but make sure that you have used your own email',
       });
   }
   const hash = bcrypt.hashSync(req.body.Password.trim(), 10);
   const newItem = {
     
       Email: req.body.Email,
       Username: req.body.Username,
       Password: hash,
   };
   const query = 'INSERT INTO signuptable(email,username,password) VALUES($1,$2,$3) RETURNING *';
   const values = [newItem.Email, newItem.Username, newItem.Password];
   const result = await pool.query(query, values);
   const { id, email, username, password } = result.rows[0];
   const payload = { id, email, username };
   const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '2years' });
   return res.status(201).send({
       status: 201,
       message: 'user inserted Successfully ',
       token,
       data: result.rows[0],
   });
};
const signin = async (req, res) => {
   const { error } = loginvalidation.validate(req.body);
   if (error) {
       return res.status(400).json({ status: 400, error: error.details[0].message });
   }
   const etaken = req.body.Username;
   const findusername = 'SELECT * FROM signuptable WHERE username= $1';
   const {
       rows,
   } = await pool.query(findusername, [etaken]);
   if (!rows[0]) {
       return res.status(400).send({
           status: 400,
           message: 'incorect username or password',
       });
   }
   const password = bcrypt.compareSync(req.body.Password.trim(), rows[0].password);
   if (!password) {
       return res.status(400).send({
           status: 400,
           message: 'incorrect username or password',
       });
   }
   const { id, Email, username } = rows[0];
   const payload = { id, Email, username };
   const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1year' });
   return res.status(200).send({
       status: 200,
       message: 'you login Successfully ',
       token,
       data: rows[0],
   });
};
export { addUser, signin };
