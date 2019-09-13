import express from 'express';
//import bodyParser from 'body-parser';
import getAll from '../Controller/getall';
import specific from '../Controller/specific';
import add from '../Controller/addentry';
import modifyentry from '../Controller/modifyentry';
//import bodyParser from 'body-parser';
const router = express.Router();


router.get('/api/v1/entries', getAll);  
router.get('/api/v1/entries/:id', specific);
router.post('/api/v1/entries/' ,add);
router.put('/api/v1/entries/:id', modifyentry);


module.exports=router;