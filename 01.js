// # Завдання 1

// Створіть об'єкт `person`, який містить властивості `name`, `age`, `gender` та
// метод `introduce()`, який повертає рядок зі словами
// `Мене звати {ім'я}, мені {вік} років я {стать}`.

// Додайте до об'єкту `person` метод `changeName(newName)`, який змінює властивість
// `name` на нове ім'я.

// Використайте ключове слово `this` для доступу до властивостей об'єкту.

const person = {
    name: 'Jane',
    age: 33,
    gender: 'female',
    introduce() {
      return `Мене звати ${this.name}, мені ${this.age} років, я ${this.gender}.`;
    },
    changeName(newName) {
      this.name = newName;
    }
  };
  
  console.log(person.introduce()); 
  person.changeName('Anna');
  console.log(person.introduce()); 