// 4.1. Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
function sumSliceArray(arr, first, second) {
    if (first < 0 || first >= arr.length || second < 0 || second >= arr.length || typeof first !== "number" || typeof second !== "number") {
      return "Помилка: невірні порядкові номери елементів масиву";
    }
    return arr[first] + arr[second];
  }
  const arr = [1, 2, 3, 4, 5, 6];
  const sum = sumSliceArray(arr, 2, 4);
  console.log(sum); // 8

// 4.2. Створіть функцію checkAge(), яка запитує у користувача його ім'я, вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. У всіх інших випадках користувач отримає доступ до перегляду фільму. У блоці catch передбачена можливість виведення назви та опису помилки.
function checkAge() {
  let name = prompt('What is your name?', '');
  let age = prompt('How old are you?', '');
  if (!age) {
    throw new Error('The field is empty! Please enter your age');
  }
  age = Number(age);
  if (isNaN(age)) {
    throw new Error('Age should be a number');
  }
  if (age < 18 || age > 70) {
    throw new RangeError('Your age should be between 18 and 70');
  }
  let status = prompt('What is your status (admin, moderator, user)?', '');
  if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
    throw new EvalError('Invalid status');
  }
  alert('You are allowed to watch the movie');
}

// 4.3. Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри. Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
function calcRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new Error('Error: width and height must be numbers.');
    }
    return width * height;
  }
  try {
    const width = Number(prompt('Enter rectangle width:'));
    const height = Number(prompt('Enter rectangle height:'));
    const area = calcRectangleArea(width, height);
    alert(`Rectangle area: ${area}`);
  } 
  catch (error) {
    alert(`Error: ${error.message}`);
  }

/* 4.4. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
Приклад роботи програми:
console.log(showMonthName(5));  // May
console.log(showMonthName(14)); // MonthException Incorrect month number*/
class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
}
function showMonthName(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number");
  }
  return monthNames[month - 1];
}
try {
  console.log(showMonthName(5)); 
  console.log(showMonthName(14)); 
} 
catch (e) {
  console.log(`${e.name} ${e.message}`);
}

/* 4.5. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.
Приклад роботи програми:
showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ] */

function showUser(id) {
    if (id < 0) {
      throw new Error("ID must not be negative: " + id);
    }
    return { id: id };
  }
  function showUsers(ids) {
    const result = [];
    for (let i = 0; i < ids.length; i++) {
      try {
        const user = showUser(ids[i]);
        result.push(user);
      } catch (e) {
        console.log(e.message);
      }
    }
    return result;
  }
  console.log(showUsers([7, -12, 44, 22]));
  