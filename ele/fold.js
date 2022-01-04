let parent = document.getElementById("products");
let data = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427708_sd.jpg;maxHeight=120;maxWidth=120",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427708cv11d.jpg;maxHeight=120;maxWidth=120",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427708cv12d.jpg;maxHeight=120;maxWidth=120",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427708cv13d.jpg;maxHeight=120;maxWidth=120",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427708cv14d.jpg;maxHeight=120;maxWidth=120",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427708cv15d.jpg;maxHeight=120;maxWidth=120",
  },
];

data.forEach(function (product) {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = product.image;

  div.append(img);

  products.append(div);
});

let parent1 = document.getElementById("similar");

let data1 = [
  {
    image1:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6419/6419336_sd.jpg;maxHeight=180;maxWidth=180",
  },
  {
    image1:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6466/6466009_sd.jpg;maxHeight=180;maxWidth=180",
  },
  {
    image1:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6466/6466010_sd.jpg;maxHeight=180;maxWidth=180",
  },
];

data1.forEach(function (product1) {
  let div = document.createElement("div");

  let img = document.createElement("img");

  img.src = product1.image1;

  div.append(img);

  parent1.append(div);
});

let parent3 = document.getElementById("most");
let data3 = [
  {
    image2:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6427/6427713_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    image2:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6466/6466010_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    image2:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441105_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    image2:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6441/6441109_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    image2:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6465/6465022_sd.jpg;maxHeight=150;maxWidth=170",
  },
];

data3.forEach(function (product2) {
  let div = document.createElement("div");

  let img = document.createElement("img");
  img.src = product2.image2;

  div.append(img);

  parent3.append(div);
});

let tata = JSON.parse(localStorage.getItem("username"));
let user2 = document.getElementById("user2");
user2.append(tata[tata.length - 1]);
