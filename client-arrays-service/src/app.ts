import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mainRouter from './routes';
import { apiErrorHandler } from './middleware/errorHandlerApi';

dotenv.config();
const app = express();
const port = process.env.PORT || '5000';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(mainRouter);
app.use(apiErrorHandler);


app.listen(port, () => { console.log(`server is listening on ${port}`) });