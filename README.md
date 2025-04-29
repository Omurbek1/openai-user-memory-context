# 📚 User Context Chatbot (Node.js + Express + OpenRouter)

Этот проект реализует персонализированное общение с пользователем, используя его данные из таблицы (`users.xlsx`) для создания контекста и генерации ответов через OpenAI или Deepseek/Mistral модели через OpenRouter API.

---

## 🚀 Функции

- Загрузка данных о пользователе из Excel
- Формирование памяти (контекста) пользователя
- Интеграция с OpenRouter API (Deepseek, Mistral и другие модели)
- Персонализированные ответы на вопросы пользователя
- Поддержка ответов на русском языке

---

## 🛠 Используемые технологии

- Node.js
- Express.js
- Axios
- dotenv
- xlsx
- OpenRouter API (Deepseek / Mistral / Llama)

---

## 📦 Установка проекта

1. Клонируйте репозиторий:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository

```
## 📚 Описание API

## 🔹 POST `/ask`

### 📥 Тело запроса:

```json
{
  "userId": "1",
  "question": "Что мне стоит изучать в 2025 году?"
}

```
#📤 Пример ответа:
{
  "answer": "В 2025 году стоит изучать искусственный интеллект, машинное обучение и кибербезопасность."
}
