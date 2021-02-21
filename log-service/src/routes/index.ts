import express, { Request, Response } from 'express';
import logRouter from './log'

const router = express.Router();

router.get('/', (_req:Request, res: Response) => {
    res.json({ logService: new Date() });
});

router.use(logRouter);


export default router;
