import express from 'express';
import getAll from '../Controller/getall';

const router = express.Router();


router.get('/api/v1/entries', getAll);  

module.exports=router;