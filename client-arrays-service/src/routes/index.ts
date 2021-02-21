import express, { Request, Response } from 'express';
import reversedOrderedRouter from './reversedOrdered';

const router = express.Router();

router.get('/', (_req:Request, res: Response) => {
    res.json({ clientArraysService: new Date() });
});

router.use(reversedOrderedRouter);


export default router;
