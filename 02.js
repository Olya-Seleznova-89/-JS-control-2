// # Завдання 2

// Створіть об'єкт `car`, який містить властивості марка, модель, рік випуску,
// швидкість.

// Створіть ще один обʼєкт `location`, який містить властивість `city` та
// `distance`

// Створіть метод обʼєкта car `showInfo()`, який виводить інформацію про автомобіль
// на екран у форматі
// `Марка: <марка>; Модель: <модель>; Рік випуску: <рік випуску>; `.

// Створіть функцію `showTime()`, яка буде вираховувати за який час автомобіль
// доїде до міста `city` та виводити в консоль повідомлення в форматі
// `Автомобіль {brand}, марки {model} дістанеться міста {city} за {time}`

// Використовуйте обєднання обʼєктів, метод forEach та ключове слово this для
// доступу до властивостей об'єкту.


const car = {
    brand: "Audi",
    model: "A7",
    year: 2020,
    spead: 110,
    showInfo() {
      console.log(
        `Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year};`
      );
    },
  };
  const location = {
    city: "Полтава",
    distance: 570,
  };
  
  const obj = Object.assign(car, location);
  
  function showTime(object) {
    (object.time =  Math.round(object.distance / object.spead)),
      console.log(
        `Автомобіль ${object.brand}, марки ${object.model} дістанеться міста ${object.city} за ${object.time}`
      );
  }
  car.showInfo();
  showTime(obj);