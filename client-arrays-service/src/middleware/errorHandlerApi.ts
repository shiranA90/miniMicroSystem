import ApiErrors from '../handlers/errors';
import { Request, Response, NextFunction } from 'express';
 
export const apiErrorHandler = (err: Error, _req: Request, res: Response, _next:NextFunction) => {
    if (err instanceof ApiErrors){
        return res.status(err.statusCode).json({ message: err.message, errors: err.errors});
    }
    res.status(500).json('Application error');
}