import { Request, Response } from 'express';

export const logReversedOrderedArray = (req: Request, res: Response) => {
    const { reversedOrderedArray } = req.body;
    if (reversedOrderedArray) {
        console.log('Reversed ordered array', reversedOrderedArray);
    } else {
        console.log('Reversed ordered array not found');
    }
    res.send();
}