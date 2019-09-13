import express from 'express';
//import bodyParser from 'body-parser';
import getAllentriesl from '../Controller/getallentriesl';
import getspecificentry from '../Controller/getspecificentry';
import addentry from '../Controller/addentry';
import bodyParser from 'body-parser';
const router = express.Router();


router.get('/api/v1/entries', getAllentriesl);  
router.get('/api/v1/entries/:id', getspecificentry);
router.post('/api/v1/entries/' ,addentry);


module.exports=router;