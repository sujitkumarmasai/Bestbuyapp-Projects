let cont61 = document.getElementById("cont61");
cont61.style.width = "95%";

let cont611data = [
  {
    name: "Samsung - 65 Class 8 Series LED 4K UHD Smart Tizen TV Samsung - 65",
    price: 749.9,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401718_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    name: "Fitbit Charge 5 advanced fitness tracker.",
    price: 465,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429416_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    name: "Get The Forever Purge and catch up on the rest of the Purge movies.",
    price: 468,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-purge-mmt455867-04acea9b-469f-459c-8abc-4178c288457d.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "iPad (9th generation).",
    price: 1000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    name: "Fitbit Charge 5 advanced fitness tracker.",
    price: 465,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428508_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    name: "Get The Forever Purge and catch up on the rest of the Purge movies.",
    price: 789,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-purge-mmt455867-04acea9b-469f-459c-8abc-4178c288457d.jpg;maxHeight=504;maxWidth=740",
  },
];
let cont612data = [
  {
    name: "iTop cell phone deals.",
    price: 555,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-453348-210906_DER-09602cca-300e-4ff7-a38f-37f53245f10f.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Electric vehicles.",
    price: 999,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-446970_der-c3efc996-e176-4486-8400-a29c92ace142.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "MacBook Save up to $300 on select models.",
    price: 999.99,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_MacBook-Pro-13-6287705-CO-62040-0526-der-158533.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "iTop cell phone deals.",
    price: 555,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-453348-210906_DER-09602cca-300e-4ff7-a38f-37f53245f10f.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Electric vehicles.",
    price: 999,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-446970_der-c3efc996-e176-4486-8400-a29c92ace142.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "MacBook Save up to $300 on select models.",
    price: 999.99,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_MacBook-Pro-13-6287705-CO-62040-0526-der-158533.jpg;maxHeight=408;maxWidth=600",
  },
];
let cont613data = [
  {
    name: "Electric vehicles.",
    price: 999,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-446970_der-c3efc996-e176-4486-8400-a29c92ace142.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "MacBook Save up to $300 on select models.",
    price: 999.99,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6406/6406743_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    name: "Introducing the new Surface devices.",
    price: 1500,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_medellin-black-0920-8e472fc3-a9b6-42bf-a9f2-6a9651ad64ed.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Fitbit Charge 5 advanced fitness tracker.",
    price: 2000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT_446909_pol_COPE_DER-cd40f750-30e1-47e5-b8b0-832c02591c0e.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "MacBook Save up to $300 on select models.",
    price: 1999,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401726_sd.jpg;maxHeight=150;maxWidth=170",
  },
  {
    name: "MacBook Save up to $300 on select models.",
    price: 1999,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_MacBook-Pro-13-6287705-CO-62040-0526-der-158533.jpg;maxHeight=408;maxWidth=600",
  },
];

cont61.style.display = "flex";
cont61.style.gap = "1%";
function show61(d) {
  cont61.innerHTML = null;
  d.forEach(function (prod) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = prod.img;
    img.style.width = "180px";
    img.style.height = "130px";
    img.style.marginLeft = "2%";
    let name = document.createElement("p");
    name.style.color = "blue";
    name.style.marginLeft = "2%";
    name.innerText = prod.name;
    let price = document.createElement("p");
    let pricesy = document.createElement("spna");
    pricesy.innerHTML = "&#36;";
    price.style.marginLeft = "2%";
    let pricemo = document.createElement("span");
    pricemo.innerText = prod.price;

    price.append(pricesy, pricemo);
    let addtocartbtn = document.createElement("button");
    addtocartbtn.innerText = "Add to cart";
    addtocartbtn.backgroundColor = "white";
    addtocartbtn.style.marginLeft = "2%";
    addtocartbtn.onclick = function () {
      addtocart(prod);
      showalert(prod);
    };
    div.append(img, name, price, addtocartbtn);
    cont61.append(div);
  });
}
show61(cont611data);

let swapleft = document.getElementById("swapleft");
let swapright = document.getElementById("swapright");

swapleft.addEventListener("click", swapleftfun);
let a = 0;
let b = 0;
function swapleftfun() {
  a--;
  if (a == -1 || a == 0) {
    show61(cont611data);
  } else if (a == -2) {
    show61(cont612data);
  } else if (a == -3) {
    show61(cont613data);
    a = 0;
  }
}
function swaprightfun() {
  b++;
  if (b == 0 || b == 1) {
    show61(cont611data);
  } else if (b == 2) {
    show61(cont612data);
  } else if (b == 3) {
    show61(cont613data);
    b = 0;
  }
}

swapright.addEventListener("click", swaprightfun);

if (localStorage.getItem("bestbuycart") === null) {
  localStorage.setItem("bestbuycart", JSON.stringify([]));
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
