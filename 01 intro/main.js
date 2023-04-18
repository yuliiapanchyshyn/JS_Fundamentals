// 1.2. Напишіть скріпт в зовнішньому файлі, який виводить в консоль ваше прізвище. Підключіть створений файл до HTML-документу.
let lastName = "Panchyshyn";
console.log(lastName);

/* 1.3. a) оголосіть дві змінні; 
        b) запишіть у змінні будь-які значення; 
        c) виведіть на екран значення змінних;
        d) скопіюйте значення однієї змінної в іншу;
        e) виведіть на екран значення змінних. */
let hello = "Hello";
let name = "Yuliia";
console.log(hello);
console.log(name);
console.log(hello, name);

// 1.4. Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.
let user = {
    firstName: "Yuliia",
    lastName,
    age: 27,
    isWorking: true,
    phoneNumber: null
};

// 1.5. Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.
const isAdult = confirm("Are you an adult?");
console.log(isAdult);

/* 1.6. В зовнішньому файлі напишіть скріпт, в якому оголосіть змінні, для збереження таких даних:
        - ваше ім’я
        - ваше прізвище
        - навчальна група
        - ваш рік народження.
        Присвойте змінним відповідні значення. Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. Визначте тип кожної змінної. Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String. Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль. */
let firstName = "Yuliia"; //string
let lastNames = "Panchyshyn"; //string
let groupNumber = 1; //number
let yearOfBirth = 1995; //number
let married = true; //boolean
let age = null; //null
let hobby; //underfined
console.log(`GroupNumber: ${groupNumber}, type: ${typeof(groupNumber)}`);
console.log(`YearOfBirth: ${yearOfBirth}, type: ${typeof(yearOfBirth)}`);
console.log(`Married: ${married}, type: ${typeof(married)}`);
console.log(`FirstName: ${firstName}, type: ${typeof(firstName)}`);
console.log(`LastName: ${lastName}, type: ${typeof(lastName)}`);
console.log(`Age: ${age}, type: ${typeof(age)}`);
console.log(`Hobby: ${hobby}, type: ${typeof(hobby)}`);

// 1.7. За допомогою функції prompt() напишіть скріпт, який послідовно запитує в користувача логін, емейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
let userLogin = prompt("Enter your login:");
let userEmail = prompt("Enter your email:");
let userPassword = prompt("Enter your password:");
console.log("Dear User, your email is " + userEmail + "," + " your password is qwerty");  

// 1.8. Напишіть скріпт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран.
let secondsInHour = 60 * 60;
console.log(secondsInHour);
alert("The number of seconds in an hour: 3600")
let secondsInDay = 60 * 60 * 24;
console.log(secondsInDay);
alert("The number of seconds in the day: 86400")
let secondsInMonth = 60 * 60 * 60 * 12;
console.log(secondsInMonth);
alert("The number of seconds in the month: 2592000")