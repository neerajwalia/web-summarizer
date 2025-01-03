import { type Request, type Response } from 'express';
import { summarizeText } from '../services/summarizationService';
import { type SummarizationRequest } from '../models/summarizationModel';

export async function getSummary(req: Request, res: Response): Promise<void> {
  try {
    const { content }: SummarizationRequest = req.body;

    if (!content || content.trim().length === 0) {
      res.status(400).json({ error: 'Content to summarize is required' });
      return;
    }

    const summary = await summarizeText(content);
    res.status(200).json({ summary });
  } catch (error: any) {
    console.error('Error in summarizationController:', error.message);
    res
      .status(500)
      .json({ error: 'Failed to generate summary. Please try again.' });
  }
}
