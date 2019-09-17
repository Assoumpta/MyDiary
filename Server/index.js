import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/entryRoutes';
//import db from './Models/db';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);``

const PORT = 4000;
app.listen( PORT, function(){
 console.log(`server is running on PORT ${PORT}`)
});

