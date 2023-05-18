/* 9.1. Для заданої сторінки знайдіть всі <h2> з класом head, зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з класом inner і поставте їм розмір шрифту 35px.
    <h2 class="head">header1</h2>
    <h2 class="head">header2 <span class="inner">inner elem1</span></h2>
    <h2>header3</h2>
    <h2 class="head">header4<span>inner elem2</span></h2>
    <h2>header5</h2> */
let headers = document.querySelectorAll('h2.head');
headers.forEach(function(header) {
    header.style.backgroundColor = 'green';
    let innerElements = header.getElementsByClassName('inner');
    for (let i = 0; i < innerElements.length; i++) {
        innerElements[i].style.fontSize = '35px';
      }
    });

// 9.2. На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".
let links = document.querySelectorAll('a');
links.forEach(function(link) {
  let href = link.getAttribute('href');
  if (href.startsWith('https://')) {
    link.setAttribute('target', '_blank');
  }
});

/* 9.3. Знайдіть теги <div>, які стоять безпосередньо після <h3> і перемістіть кожен <div>-елемент так, щоб він став безпосередньо над <h3>.
   <h3>header1</h3>
   <div>text1</div>
   <h3>header2</h3>
   <div>text2</div> */
let headings = document.querySelectorAll('h3');
headings.forEach(function(heading) {
  let nextElement = heading.nextElementSibling;
  if (nextElement.tagName === 'DIV') {
    heading.parentNode.insertBefore(nextElement, heading);
  }
});

// 9.4. На HTML-сторінці є 6 чекбоксів. Напишіть скріпт, який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними. 
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let checkedCount = 0;
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkedCount++;
    } else {
      checkedCount--;
    }
    if (checkedCount >= 3) {
      checkboxes.forEach(function(checkbox) {
        checkbox.disabled = true;
      });
    }
  });
});