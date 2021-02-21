import express from 'express';
import cors from 'cors';
import mainRouter from './routes'

const app = express();
const port = process.env.PORT || '5001';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(mainRouter);

app.listen(port, () => { console.log(`server is listening on ${port}`) });