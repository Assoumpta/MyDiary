import express from 'express';

import router from '../Routes/entryRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

<<<<<<< HEAD
const PORT = 4000;

app.listen(process.env.PORT || 4000, () => { (`App listening on PORT 4000`); });
=======
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {console.log (`App listening on PORT ${PORT}`); });
>>>>>>> 3282f2463d44845a641da385708efb10f6a5766b

export default app;
