/* 10.1.
Напишіть код в / Ваш код /, щоб він працював
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};
let {  Ваш код  } = names; 
console.log(f); // "Tom"
console.log(x); // "Ray"
console.log(fifth); // "Name №5" 
*/
let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray",
  fourth: "Bob",
};
let { first: f, third: x, fifth = "Name №5" } = names;
console.log(f);       
console.log(x);       
console.log(fifth);   

/* 10.2.
Напишіть код в / Ваш код /, щоб він працював
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};
let   Ваш код   = data;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26
*/
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data;
console.log(name2);   
console.log(age2);    
console.log(name4);   
console.log(age4);   

/* 10.3.
Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
Якщо параметри типу Number відсутні, повертає число 0.
function mul( ваш код ) {
   // Ваш код
}
console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0
*/
function mul(...params) {
  let result = 1;
  let hasNumber = false;

  for (let param of params) {
    if (typeof param === "number") {
      result *= param;
      hasNumber = true;
    }
  }
  return hasNumber ? result : 0;
}
console.log(mul(1, "str", 2, 3, true));      
console.log(mul(null, "str", false, true)); 

/* 10.4.
Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
Приклади використання:
let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size); // 4
console.log(map.get(2)); // "span"
*/

/* 10.5.
За допомгою коду у нижче створюється масив, використовуючи цикл, до масиву записуються три функції. Логіка функцій проста, в консоль виводиться значення лічильника на момент створення функції.
На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2(відповідно до виклику). 

var arr = [];

for (var i = 0; i <= 2; i++) {
   arr[i] = function () {
      console.log(i);
   };
}

arr[0](); // 0
arr[arr.length - 1](); // 2 */