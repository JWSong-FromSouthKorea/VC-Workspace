import {OpenAIAPI} from openai;
import dotenv from 'dotenv';
dotenv.config();

const { OpenAIAPI } = require('openai');
const _openai = new OpenAIAPI({ apiKey: process.env.OPENAI_API_KEY });

async function analyzeTextWithGPT3(text) {
  const response = await _openai.createCompletion({
    model: "text-davinci-002",
    prompt: `Sentence analysis: '${text}'\nExtract the Persona and Purpose. Please enter Persona next to Persona: and Purpose next to Purpose:. Please remove any answers other than Persona and Purpose. If you were unable to extract, just send FAIL.`,
    max_tokens: 100,
    temperature: 0.1,
  });

  return response.choices[0].text.trim().replace(`\n`, " ");
}

export default analyzeTextWithGPT3;