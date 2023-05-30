//12.1. Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).
const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  const osInfo = {
    platform: os.platform(),
    type: os.type(),
    uptime: Math.floor(os.uptime() / 60)
  };

  const currentDirectory = process.cwd();
  const serverFileName = path.basename(__filename);
  const response = `
    <h1>System information</h1>
    <p>OS type: ${osInfo.platform} ${osInfo.type}</p>
    <p>System work time: ${osInfo.uptime} minutes</p>
    <p>Current work directory: ${currentDirectory}</p>
    <p>Server file name: ${serverFileName}</p>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.statusCode = 200;
  res.end(response);
});

server.listen(5000, () => {
  console.log('Сервер запущено на порті 5000');
});

/* 12.2. Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:
*/
const getGreetingMessage = (username) => {
    const currentHour = new Date().getHours();
    let greeting = '';
  
    if (currentHour < 12) {
      greeting = 'Good morning';
    } else if (currentHour < 18) {
      greeting = 'Good day';
    } else {
      greeting = 'Good evening';
    }
  
    return `${greeting}, ${username}!`;
  };
  
  module.exports = {
    getGreetingMessage
  };

  const http = require('http');
  const { getGreetingMessage } = require('./personalmodule');

  const server = http.createServer((req, res) => {
    const username = 'Yuliia'; 
    const greetingMessage = personalModule.getGreetingMessage(username);
  
    const response = `
      <h1>Greeting</h1>
      <p>${greetingMessage}</p>
    `;
  
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(response);
  });
  
  server.listen(5000, () => {
    console.log('Сервер запущено на порті 5000');
  });
  

