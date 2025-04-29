const xlsx = require("xlsx");

function getUserContext(userId) {
  const wb = xlsx.readFile("./users.xlsx");
  const ws = wb.Sheets[wb.SheetNames[0]];
  const data = xlsx.utils.sheet_to_json(ws);

  const user = data.find((row) => row.id.toString() === userId.toString());
  if (!user) throw new Error("Пользователь не найден");

  return `
Имя: ${user.name}
Возраст: ${user.age}
Город: ${user.city}
Интересы: ${user.interests}
`;
}

module.exports = getUserContext;
