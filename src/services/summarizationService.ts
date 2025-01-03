const axios = require('axios');

export async function summarizeText(content: string) {
  const apiKey = process.env.OPENAI_API_KEY;
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

  const data = {
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant that summarizes website content.',
      },
      { role: 'user', content: `Summarize the following content: ${content}` },
    ],
    max_tokens: 150,
    temperature: 0.5,
  };

  try {
    const response = await axios.post(apiUrl, data, { headers });
    return response.data.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error summarizing content:', error);
    throw error;
  }
}
