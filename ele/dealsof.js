let cont3 = document.getElementById("cont3");
cont3.style.display = "grid";
cont3.style.gridTemplateColumns = "auto auto auto auto";
cont3.style.gap = "1%";
cont3.style.width = "50%";

let cont3data = [
  {
    name: "bObsweep - Bob PetHair Robot Vacuum and Mop - Rouge",
    price: 1000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4728/4728202_sd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save $30 or $35 on select Walker Edison TV stands in black or driftwood style.",
    price: 3005,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-01-845ec3ac-3c32-478e-8bfd-de3554cb2eb8.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save $10 on Sideclick universal remote attachment for Amazon Fire TV, Apple TV®, Google Chromecast, NVIDIA Shield TV or Roku streaming devices.",
    price: 199,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-02-001e73b1-8f5d-4bf0-995e-9d68c3804783.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save up to 37% on select GUNNAR computer and gaming glasses.Minimum savings is 30%.Shop Now",
    price: 99,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-03-94f72ffc-8c9a-4144-be6c-f12bdf903c07.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Lenovo - Smart Frame 21.5",
    price: 249,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455115_rd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save on Occasions 6-ft. tall reaper or 8.5-ft. wide inflatable pumpkin patch.",
    price: 999.99,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-04-d6a70f54-b5cc-4bea-9b73-72600e816419.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Nimble - Eco - Friendly Convertible Pad - Gray",
    price: 1500,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6433/6433241_sd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save on select ADATA internal solid state drives.",
    price: 2000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-06-85bb07b0-a346-43ef-9104-b3ce8de88205.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "SWFT - ZIP eBike w/ 37mi Max Operating Range & 19.8 mph Max Speed - Black",
    price: 2199,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464325_sd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Barbasol - 20-Piece Ultimate Grooming Pro Hair Clipper Kit - Black",
    price: 19.9,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432851_rd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save 17% on Energizer MAX 16-pack of AA or AAA alkaline batteries.",
    price: 29,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-05-1d14717d-b1c5-45cf-9858-30a74c3c80a9.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Insignia™ - Bagless Upright Vacuum - Black",
    price: 59,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6436/6436502_sd.jpg;maxHeight=302;maxWidth=504",
  },
];
function cont3datashow(cont3data) {
  cont3.innerHTML = null;
  cont3data.forEach(function (prod) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = prod.img;
    img.style.width = "280px";
    img.style.height = "230px";
    img.style.marginLeft = "15px";
    let name = document.createElement("p");
    name.style.color = "blue";
    name.style.marginLeft = "3%";
    name.innerText = prod.name;

    let price = document.createElement("p");
    let pricesy = document.createElement("spna");
    pricesy.innerHTML = "&#36;";
    price.style.marginLeft = "3%";
    let pricemo = document.createElement("span");
    pricemo.innerText = prod.price;

    price.append(pricesy, pricemo);
    let addtocartbtn = document.createElement("button");
    addtocartbtn.innerText = "Add to cart";
    addtocartbtn.backgroundColor = "white";
    addtocartbtn.style.marginLeft = "3%";
    addtocartbtn.onclick = function () {
      addtocart(prod);
      showalert(prod);
    };
    div.append(img, name, price, addtocartbtn);
    cont3.append(div);
  });
}
cont3datashow(cont3data);

function sorLtH() {
  let arr = cont3data.sort(function (a, b) {
    return a.price - b.price;
  });
  cont3datashow(arr);
}
function sorHtL() {
  let arr = cont3data.sort(function (a, b) {
    return b.price - a.price;
  });
  cont3datashow(arr);
}

function addtocart(prod) {
  let productcart = JSON.parse(localStorage.getItem("bestbuycart"));
  productcart.push(prod);
  localStorage.setItem("bestbuycart", JSON.stringify(productcart));
}
function showalert(prod) {
  let par = JSON.parse(localStorage.getItem("bestbuycart"));
  let name = prod.name;
  let price = prod.price;
  let c = 0;
  par.forEach(function (par) {
    if (name === par.name && price === par.price) {
      c++;
    }
  });
  if (c >= 2) {
    alert("Product already in cart");
  }
}

let tata = JSON.parse(localStorage.getItem("username"));
let user2 = document.getElementById("user2");
user2.append(tata[tata.length - 1]);
