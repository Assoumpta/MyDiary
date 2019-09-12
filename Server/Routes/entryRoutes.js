import express from 'express';
//import bodyParser from 'body-parser';
import getAll from '../Controller/getall';
import specific from '../Controller/specific';
import add from '../Controller/addentry';
import bodyParser from 'body-parser';
const router = express.Router();


router.get('/api/v1/entries', getAll);  
router.get('/api/v1/entries/:id', specific);
router.post('/api/v1/entries/' ,add);


module.exports=router;