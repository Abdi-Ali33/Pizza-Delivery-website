// Business Logic

function Pizza(id, name, image, price, size, rating = 4) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.size = size;
  this.image = image;
  this.toppings = [];
  this.rating = rating;
  this.total = 0;
}

Pizza.prototype.setCrust = function (crustId) {
  const selectedCrust = crusts.find(({ id }) => id == crustId);
  if (selectedCrust) {
    this.crust = selectedCrust;
    this.calculateTotal();
  }
};

Pizza.prototype.setToppings = function (toppings) {
  this.toppings = toppings;
  this.calculateTotal();
};

Pizza.prototype.calculateTotal = function () {
  let price = this.price;

  if (this.crust) {
    price += this.crust.price;
  }

  if (this.toppings.length > 0) {
    this.toppings.forEach((pricetopping) => {
      price += pricetopping.price;
    });
  }

  this.total = price;
};

//   pizza sizes

const pizzaSizes = ["small", "large", "medium"];
// pizza toppings

function Topping(id, name) {
  this.id = id;
  this.name = name;
  this.prices = [
    {
      size: "small",
      price: 50,
    },
    {
      size: "medium",
      price: 80,
    },
    {
      size: "large",
      price: 100,
    },
  ];
}

Topping.prototype.setPrice = function (size) {
  const price = this.prices.find((sizePrice) => sizePrice.size == size);
  if (price) {
    this.price = price.price;
  } else {
    this.price = 0;
  }
};
// toppings array

const toppings = [
  new Topping(1, "Bacon"),
  new Topping(2, "Cheese"),
  new Topping(3, "Mushrooms"),
  new Topping(4, "Avocado"),
];
// crusts array
const crusts = [
  {
    id: 1,
    name: "Crispy",
    price: 100,
  },
  {
    id: 2,
    name: "Stuffed",
    price: 150,
  },
  {
    id: 3,
    name: "Gluten Free",
    price: 110,
  },
];
//   pizzas array
const pizzas = [
  new Pizza(
    1,
    "Tikka Chicken",
    "./images/pizzas/pizza1.png",
    600,
    pizzaSizes[0]
  ),
  new Pizza(
    2,
    "Chicken & Mushroom",
    "./images/pizzas/pizza2.png",
    1100,
    pizzaSizes[1]
  ),
  new Pizza(
    3,
    "Sweet Chilli Chicken",
    "./images/pizzas/pizza3.png",
    1000,
    pizzaSizes[2]
  ),
  new Pizza(
    4,
    "Mexican Fiesta",
    "./images/pizzas/pizza4.png",
    1000,
    pizzaSizes[1]
  ),
  new Pizza(5, "BBQ Chcken", "./images/pizzas/pizza5.png", 600, pizzaSizes[0]),
  new Pizza(
    6,
    "Four Seasons",
    "./images/pizzas/pizza6.png",
    800,
    pizzaSizes[2]
  ),
  new Pizza(
    7,
    "CHICKEN O’RELLO",
    "./images/pizzas/pizza7.png",
    600,
    pizzaSizes[0]
  ),
  new Pizza(
    8,
    "Peri Peri Chicken",
    "./images/pizzas/pizza8.png",
    1200,
    pizzaSizes[1],
    2
  ),
];

