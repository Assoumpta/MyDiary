import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/entryRoutes';
<<<<<<< HEAD

=======
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

const PORT = 4000;
<<<<<<< HEAD
app.listen(process.env.PORT || 4000, () => (`App listening on PORT 4000`));
=======
app.listen(process.env.PORT || 4000, () => { (`App listening on PORT 4000`); });

export default app;
>>>>>>> d2e6fffdbf85e18424c44bf620aee8cca85489a4
