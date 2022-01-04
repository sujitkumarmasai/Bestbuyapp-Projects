var parent1 = document.getElementById("store");
var parent = document.getElementById("cont");
let data = [
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395756_sd.jpg;maxHeight=73;maxWidth=58",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395747_sd.jpg;maxHeight=73;maxWidth=58",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6398/6398395_sd.jpg;maxHeight=73;maxWidth=58",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395754_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6395/6395754_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426298_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430639_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426303_sd.jpg;maxHeight=73;maxWidth=58",
  },
];

data.forEach(function (product) {
  let div = document.createElement("div");

  let img = document.createElement("img");

  img.src = product.image;

  div.append(img);
  parent.append(div);
});
data.forEach(function (product1) {
  let div = document.createElement("div");

  let img = document.createElement("img");

  img.src = product1.image;

  div.append(img);
  store.append(div);
});

let tata = JSON.parse(localStorage.getItem("username"));
let user2 = document.getElementById("user2");
user2.append(tata[tata.length - 1]);
