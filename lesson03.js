/*Створіть масив styles з елементами «Джаз» та «Блюз».
  Додайте "Рок-н-рол" в кінець.
  Замініть значення всередині на «Класика». Ваш код для пошуку значення всередині повинен працювати для масивів з будь-якою довжиною.
  Видаліть перший елемент масиву та покажіть його.
  Вставте «Реп» та «Реггі» на початок масиву.<br>
*/

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-рол");
console.log(styles);

styles [parseInt(styles.length /2)] = "Класика";
console.log(styles);

let firstStyle = styles.shift();
console.log(firstStyle);
console.log(styles);

let newStyles = styles.unshift("Реп", "Реггі");
console.log(newStyles);
console.log(styles);