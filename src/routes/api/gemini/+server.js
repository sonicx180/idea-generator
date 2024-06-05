import { json } from "@sveltejs/kit"
import { API_KEY } from "$env/static/private"

import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});


export async function POST({request}) {
    const result = await model.generateContent("Give a random, short idea")
    const response = await result.response;
    const text = response.text()

    return json({ message: text})
}
