// Нужно написать код, который отвечает за отображение на сайте информации о транспорте и цене.

// Объект, с которым предстоит работать:
const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
  },
  {
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
  }
];

// Нужно:

// создать класс Transport, у него есть свойства: type, price, brand и два метода getInfo() и getPrice();
class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    return `${this.type}, ${this.brand}`;
  }
  getPrice() {
    return this.price.toLocaleString('ru-RU') + ' ₽';
  }
}

// создать класс Car, который наследует от Transport.Этот класс должен содержать метод getDoorsCount(), который возвращает количество дверей;
class Car extends Transport {
  constructor(type, price, brand, doors) {
    super(type, price, brand);
    this.doors = doors;
  }
  getDoorsCount() {
    return {
      doors: this.doors,
    }
  }
}

// создать класс Bike, который наследует от Transport.Этот класс должен содержать метод getMaxSpeed(), который возвращает максимальную скорость мотоцикла.
class Bike extends Transport {
  constructor(type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return {
      maxSpeed: this.maxSpeed,
    }
  }
}

const displayTransport = (transport) => {
  const sectionContainer = document.querySelector('.section-container');

  //создаем элемент
  const newElementDiv = document.createElement('div');
  // присваиваем ему класс
  newElementDiv.classList.add('card-list');

  //  создаем новый элемент img
  let newElementImg = document.createElement('img');
  // задаем картинке параметры
  newElementImg.src = transport.image;
  newElementImg.alt = 'Авто';
  newElementImg.classList.add('card-list__image');
  newElementDiv.appendChild(newElementImg);

  const cardContent = document.createElement('div');
  cardContent.classList.add('card-content');

  const brandElement = document.createElement('p');
  brandElement.classList.add('card-content__brand');
  brandElement.textContent = `Тип: ${transport.getInfo()}`;
  cardContent.appendChild(typeElement);

  const priceElement = document.createElement('p');
  priceElement.classList.add('card-content__price');
  priceElement.textContent = `Цена: ${transport.getPrice()}`;
  cardContent.appendChild(priceElement);

  const doorsElement = document.createElement('p');
  doorsElement.classList.add('card-content__doors');
  doorsElement.textContent = `Количество дверей: ${transport.getDoorsCount()}`;
  cardContent.appendChild(priceElement);

  const maxSpeedElement = document.createElement('p');
  maxSpeedElement.classList.add('card-content__max-speed');
  maxSpeedElement.textContent = `Максимальная скорость: ${transport.getMaxSpeed()} км/ч`;
  cardContent.appendChild(maxSpeedElement);

  newElementDiv.appendChild(cardContent);
  sectionContainer.appendChild(newElementDiv);
}

// добавление объектов на основе массива data
data.forEach(item => {
  if (item.type === 'car') {
    return new Car(item.price, item.brand, item.doors);
  } else if (item.type === 'bike') {
    return new Bike(item.price, item.brand, item.maxSpeed);
  }
});

displayTransport(transport);