const axios = require("axios");
require("dotenv").config();

async function askDeepseek(messages) {
  const response = await axios.post(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      model: "mistralai/mistral-7b-instruct",
      messages,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost",
      },
    }
  );

  return response.data.choices[0].message.content;
}

module.exports = askDeepseek;
