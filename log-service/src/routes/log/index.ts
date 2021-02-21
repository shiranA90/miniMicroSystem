import express, { Request, Response } from 'express';
import { logReversedOrderedArray } from '../../controllers'

const router = express.Router();

router.post('/log-reversed',logReversedOrderedArray);

export default router;