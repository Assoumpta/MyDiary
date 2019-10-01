import express from 'express';

import router from '../Routes/entryRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

const PORT = 4000;

app.listen(process.env.PORT || 4000, () => { (`App listening on PORT 4000`); });

export default app;
