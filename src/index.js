const messages = ["Oscar", "Ana", "Nikolai", "Diego", "Laura", "Santiago"];

const randomMsg = () => {
  const mesagge = messages[Math.floor(Math.random() * messages.length)];
  console.log(mesagge);
};

module.exports = { randomMsg };
