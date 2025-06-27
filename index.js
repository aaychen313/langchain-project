import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage } from "@langchain/core/messages";
import 'dotenv/config';

async function main() {
  const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GEMINI_API_KEY,
    model: "gemini-2.0-flash",
    temperature: 0,
  });

  const firstResponse = await model.invoke([
    new HumanMessage("Give me a random animal."),
  ]);

  const animal = firstResponse.text.trim();

  const secondResponse = await model.invoke([
    new HumanMessage(`Tell me a fun fact about a ${animal}.`),
  ]);

  console.log("Animal:", animal);
  console.log("Fun fact:", secondResponse.text);
}

main().catch(console.error);