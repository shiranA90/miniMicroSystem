import express, { Request, Response } from 'express';
import { getReversedOrderedArray } from '../../controllers';
import { reversedOrderedArraySchema } from './../validators';
import { validator } from '../../middleware/routeValidator';

const router = express.Router();

router.post('/reversed-ordered', validator(reversedOrderedArraySchema), getReversedOrderedArray);

export default router;