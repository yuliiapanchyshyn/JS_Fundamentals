/* 6.1. 
На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
        1) першого елемента списку
        2) останнього елемента списку
        3) другого елемента списку
        4) четвертого елемента списку
        5) третього елемента списку
Приклад:
•        1
•        2
•        3
•        4
•        5
Результат виводу: 1, 5, 2, 4, 3 */
let list = document.getElementById("list");
let items = list.getElementsByTagName("li");
let firstItem = items[0].textContent;
let lastItem = items[items.length - 1].textContent;
let secondItem = items[1].textContent;
let fourthItem = items[3].textContent;
let thirdItem = items[2].textContent;
let message = `${firstItem}, ${lastItem}, ${secondItem}, ${fourthItem}, ${thirdItem}`;
alert(message);

/* 6.2. Для сторінки
<body>
  <h1>I'am a big header!!!</h1>
  <div id="myDiv">
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
    <p>Fourth paragraph</p>
  </div>
  <ul id="myList">
    <li>Make</li>
    <li>me</li>
    <li>horizontal!</li>
  </ul>
  <span>Make me invisible, please!</span>
</body>
Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці. */
let header = document.querySelector("h1");
header.style.fontSize = "48px";
header.style.textAlign = "center";

let div = document.getElementById("myDiv");
div.style.backgroundColor = "#f2f2f2";
div.style.padding = "20px";

let lists = document.getElementById("myList");
list.style.display = "flex";
list.style.flexDirection = "row";
list.style.justifyContent = "space-between";
list.style.listStyleType = "none";

let span = document.querySelector("span");
span.style.display = "none";

/* 6.3. Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
<body>
  main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body> */
let body = document.querySelector("body");
let main = document.createElement("main");
let div = document.createElement("div");
let p = document.createElement("p");
main.setAttribute("class", "mainClass check item");
div.setAttribute("id", "myDiv");
p.innerText = "First paragraph";
div.appendChild(p);
main.appendChild(div);
body.appendChild(main);

// 6.4. 
const btn = document.querySelector('.btn');
const arrInputs = document.querySelectorAll('.arr');
const out = document.querySelector('.out');
btn.addEventListener('click', () => {
  const values = [];
  arrInputs.forEach(input => {
    values.push(input.value);
  });
  out.innerHTML = values;
});

// 6.5.
const circles = document.querySelectorAll('.circle');
circles.forEach(circle => {
  const anim = circle.getAttribute('data-anim');
  circle.classList.add(anim);
});






