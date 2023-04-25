/* 3.1. Написати функцію createArray(start, end), яка приймає на вхід 2 параметри: початкове значення та кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями) */
function createArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
}
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]

/* 3.2. Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д. 
1,2,2,3,3,3...*/
function printIntegers(a, b) {
  for (let i = a, count = 1; i <= b; i++) {
    for (let j = 0; j < count; j++) {
      console.log(i);
    }
    count++;
  }
}
  
// 3.3 Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
  }
  return arr;
}
randArray(5); // [399,310,232,379,40]

// 3.4. Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
function compact(arr1) {
  return arr1.filter((elem, index, array) => {
    return array.indexOf(elem) === index;
  });
}
const arr1 = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr1);
console.log(arr2); // [5, 3, 4, 6, 7]


/* 3.5. Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
let arrNew = funcName(arr);
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] */
function separateTypes(arr) {
  let result = [ ]; 
  for (let i = 0; i < arr.length; i++) {
  }
}

// 3.6. Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
//calc(10, 3, 1); // => 7
function calc(a, b, op) {
  let result;
  switch (op) {
    case 1:
      result = a - b;
      break;
    case 2:
      result = a * b;
      break;
    case 3:
      result = a / b;
      break;
    default:
      result = a + b;
  }
  return result;
}
console.log(calc(10, 3, 1)); // => 7 

/* 3.7. Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true */
function findUnique(arr) {
  return arr.length === new Set(arr).size;
}
console.log(findUnique([1, 2, 3, 5, 3])); // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true