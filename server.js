const express = require("express");
const dotenv = require("dotenv");
const getUserContext = require("./getUserContext");
const askDeepseek = require("./deepseekClient");

dotenv.config();
const app = express();
app.use(express.json());

app.post("/ask", async (req, res) => {
  const { userId, question } = req.body;

  if (!userId || !question) {
    return res.status(400).json({ error: "userId и question обязательны" });
  }

  try {
    const context = getUserContext(userId);
    const messages = [
      {
        role: "system",
        content:
          "Ты ассистент, который даёт персональные советы на основе данных пользователя.",
      },
      {
        role: "user",
        content: `Вот данные о пользователе:\n${context}\n\nТеперь ответь на вопрос: ${question}`,
      },
    ];

    const answer = await askDeepseek(messages);

    if (!answer) {
      return res.status(500).json({ error: "Не удалось получить ответ" });
    }
    res.json({ answer });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Сервер работает на http://localhost:${PORT}`);
});
