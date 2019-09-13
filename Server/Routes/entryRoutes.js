import express from 'express';
//import bodyParser from 'body-parser';
import getallentriesl from '../Controller/getallentriesl';
import specificentry from '../Controller/getspecificentry';
import addentry from '../Controller/addentry';
import modifyentry from '../Controller/modifyentry';
import deleteentry from '../Controller/deleteentry';
//import bodyParser from 'body-parser';
const router = express.Router();


router.get('/api/v1/entries', getallentriesl);  
router.get('/api/v1/entries/:id', specificentry);
router.post('/api/v1/entries/' ,addentry);
router.put('/api/v1/entries/:id', modifyentry);
router.delete('/api/v1/entries/:id', deleteentry);

module.exports=router;