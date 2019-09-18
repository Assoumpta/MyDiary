import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/entryRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);``

const PORT = 4000;
app.listen(process.env.PORT || 4000, () =>  console.log(`App listening on PORT 4000`));


