import { checkSchema } from 'express-validator';

export const reversedOrderedArraySchema = checkSchema({
    number: {
        in: ['body'],
        isInt: {
            options: { min: 1, max: 1000 },
            errorMessage: 'Number should be between 1-1000',
        }
    }
})