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
