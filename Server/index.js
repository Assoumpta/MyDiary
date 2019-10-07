import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/entryRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {console.log (`App listening on PORT ${PORT}`); });

export default app;
