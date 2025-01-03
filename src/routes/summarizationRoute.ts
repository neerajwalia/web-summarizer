import { Router } from 'express';
import { getSummary } from '../controllers/summarizationController';

const router = Router();

// Define the POST route for summarization
router.post('/summarize', getSummary);

export default router;
