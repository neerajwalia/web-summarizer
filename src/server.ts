import express from 'express';
import cors from 'cors';
import summarizationRoute from './routes/summarizationRoute';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all origins (adjust as needed for production)
app.use('*', cors());

// Middleware to parse JSON
app.use(express.json());

// API Routes
app.use('/api', summarizationRoute);

// Root Route
app.get('/', (req, res) => {
  res.send('Welcome to the Summarization API!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
