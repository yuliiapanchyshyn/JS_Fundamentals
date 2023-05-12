/* 8.1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
Приклад роботи:
upperCase('regexp'); 
// "String's not starts with uppercase character"
upperCase('RegExp');
// "String's starts with uppercase character" */
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
      return "String's starts with uppercase character";
    } else {
      return "String's not starts with uppercase character";
    }
}
console.log(upperCase('regexp'));  
console.log(upperCase('RegExp')); 

/* 8.2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
Приклад роботи:
checkEmail("Qmail2@gmail.com");
true */
function checkEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
console.log(checkEmail("Qmail2@gmail.com")); 

/* 8.3. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок: "Java Script"
Вихід: “Script, Java” */
function swapStrings(inputString) {
    let regex = /(\w+)\s+(\w+)/;
    let outputString = inputString.replace(regex, '$2, $1');
    return outputString;
}
let inputString = "Java Script";
let outputString = swapStrings(inputString);
console.log(outputString); 

/* 8.4. Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999). */
function validateCreditCardNumber(cardNumber) {
    let regex = /^(\d{4}-){3}\d{4}$/;
    return regex.test(cardNumber);
}
console.log(validateCreditCardNumber("9999-9999-9999-9999"));  
console.log(validateCreditCardNumber("1650-3955-7589-5555"));   

/*8.5. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
 •  Цифри (0-9).
 •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
 •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.
checkEmail('my_mail@gmail.com');
"Email is correct!"
checkEmail('#my_mail@gmail.com');
"Email is not correct!"
checkEmail('my_ma--il@gmail.com');
"Email is not correct!" */
function checkEmail(email) {
    let regex = /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    if (regex.test(email)) {
      return "Email is correct!";
    } else {
      return "Email is not correct!";
    }
}
console.log(checkEmail('my_mail@gmail.com'));     
console.log(checkEmail('#my_mail@gmail.com'));    
console.log(checkEmail('my_ma--il@gmail.com'));   

/* 8.6. Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
Приклад роботи:
checkLogin('ee1.1ret3');
true 
//1.1, 3
checkLogin('ee1*1ret3');
false 
//1, 1, 3 */
function checkLogin(login) {
    let regex = /^[A-Za-z][A-Za-z0-9]{1,9}$/;
    if (regex.test(login)) {
      let numbers = login.match(/\d+(\.\d+)?/g);
      return numbers || [];
    } else {
      return false;
    }
}
console.log(checkLogin('ee1.1ret3'));      
console.log(checkLogin('ee1*1ret3'));