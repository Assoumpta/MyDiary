import express from 'express';
import getallentriesl from '../Controller/getallentriesl';
import specificentry from '../Controller/getspecificentry';
import addentry from '../Controller/addentry';
import modifyentry from '../Controller/modifyentry';
import deleteentry from '../Controller/deleteentry';
import validator from '../validation/validation';

const router = express.Router();


router.get('/api/v1/entries', getallentriesl);  
router.get('/api/v1/entries/:id', specificentry);
 router.post('/api/v1/entries/', validator.validateString, addentry);
 router.post('/api/v1/entries/', validator.validateSpace, addentry);
router.put('/api/v1/entries/:id', modifyentry);
router.delete('/api/v1/entries/:id', deleteentry);

module.exports = router;
