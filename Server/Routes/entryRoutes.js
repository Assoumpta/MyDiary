import express from 'express';
import getAll from '../Controller/getall';
import specific from '../Controller/specific';
const router = express.Router();


router.get('/api/v1/entries', getAll);  
router.get('/api/v1/entries/:id', specific);
module.exports=router;