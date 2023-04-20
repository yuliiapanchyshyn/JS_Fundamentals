// 2.1. Дано три цілих числа: a, b, c. Перевірте істинність висловлювання: a < b < c
let a = 1;
let b = 2;
let c = 3;
if(a < b && b < c) {
  console.log("True");
} 
else {
  console.log("False");
}

// 2.2. Є такий код:
let x = 1;
let y = 2;
let res1 = ("" + x + y); 
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = true + String(x * y);
console.log(res2); // ""true2""
console.log(typeof res2); // ""string"" 

let res3 = (x < y);
console.log(res3); // true
console.log(typeof res3); // ""boolean"" 

let res4 = ((x + y) / 0);
console.log(res4); // NaN
console.log(typeof res4); // ""number""
// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у. 

// 2.3. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”,
let isAdult = +prompt("Are you an adult?");
if(isAdult >= 18) {
    console.log("You have reached the age of majority");
}
else {
    console.log("You are still too young");
}

// 2.4. Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
let data;
let count = {};
let maxCount = 0;
for (let i = 0; i < arr.length; i++) {
  if (count[arr[i]] === undefined) {
    count[arr[i]] = 1;
  } 
  else {
    count[arr[i]]++;
  }
  if (count[arr[i]] > maxCount) {
    maxCount = count[arr[i]];
    data = arr[i];
  }
}
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== data) {
    newArr.push(arr[i]);
  }
}
console.log(data);
console.log(newArr);
 
/* 2.5. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
    a) визначити і вивести в консоль площу трикутника 
    b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424). */
let d = +prompt("Довжина сторони d:");
let e = +prompt("Довжина сторони e:");
let f = +prompt("Довжина сторони f:");
if (isNaN(d) || isNaN(e) || isNaN(f) || d <= 0 || e <= 0 || f <= 0) {
  console.log('Incorrect data');
} 
else {
  let p = (d + e + f) / 2; //півпериметр
  let s = Math.sqrt(p * (p - d) * (p - e) * (p - f)); //площа
  console.log('Площа трикутника: ' + s.toFixed(3));
  if (d * d + e * e === f * f || d * d + f * f === e * e || e * e + f * f === d * d) {
    console.log('Трикутник є прямокутним');
  } 
  else {
    console.log('Трикутник не є прямокутним');
  }
}

/* 2.6. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
 В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
 В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
 В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
 В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”. */
let date = new Date();
let hour = date.getHours();
if (hour >= 23 || hour < 5) {
  console.log("Доброї ночі");
} 
else if (hour >= 5 && hour < 11) {
  console.log("Доброго ранку");
} 
else if (hour >= 11 && hour < 17) {
  console.log("Доброго дня");
} 
else if (hour >= 17 && hour < 23) {
  console.log("Доброго вечора");
}