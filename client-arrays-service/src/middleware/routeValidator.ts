import { validationResult, ValidationChain } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import ApiErrors from '../handlers/errors';

type RouteHandler = (
    req: Request, 
    res: Response, 
    next: NextFunction
) => Promise<void>

interface ValidationErrors {
    [param: string]: string,
}

export const validator = (validations: ValidationChain[]): RouteHandler => {
    return async (request: Request , _response: Response, next: NextFunction ): Promise<void> => {
        await Promise.all(validations.map((val: ValidationChain) => val.run(request)));
        const errors = validationResult(request);
        let extractedErrors:ValidationErrors[] = [];
        if (!errors.isEmpty()){
            errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
            return next(new ApiErrors(400, 'validation error' ,{errors: extractedErrors}));
        }
        next();
    }
}