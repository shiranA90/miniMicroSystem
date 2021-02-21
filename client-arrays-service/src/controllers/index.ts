import { Request, Response } from 'express';
import { logReversedOrderedArray } from '../services/api';

const range = (start: number, stop: number, step: number) => Array.from({ length: (start - stop) / step + 1}, (_, i) => start - (i * step));

export const getReversedOrderedArray = async (req: Request, res: Response) => {
    const { number: number } = req.body;
    const reversedOrderedArray = number > 1 ? range(number - 1, 1 ,1) : [];
    await logReversedOrderedArray(reversedOrderedArray);
    res.json({ reversedOrderedArray });
};