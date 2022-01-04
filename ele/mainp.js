let cont1 = document.getElementById("cont1");
cont1.style.display = "flex";
cont1.style.gap = "2%";
cont1.style.margin = "2% 2% 2% 2%";
let slide = document.createElement("div");
let slidedata = [
  "https://images6.alphacoders.com/404/404698.jpg",
  "http://wallpapercave.com/wp/Y2bxW4M.jpg",
  "https://assets.entrepreneur.com/images/misc/1567229620_0_iPhone-11-11-Max-and-11R-compared-in-New-Video.jpg?width=1000",
  "http://www.powerhouse.je/images/samsung-ue32k5500-32-full-hd-smart-tv-p9856-16876_image.jpg",
  "https://i0.wp.com/www.watch4today.com/wp-content/uploads/2018/02/K88H-Smart-Watch-HD-Display-Heart-Rate-Monitor-Pedometer-Fitness-Tracker-MTK2502C-Men-Smartwatch-Connected-For-1.jpg?fit=1000%2C1000&ssl=1",
];
slide.style.width = "45%";
slide.style.height = "600px";
let inter;
function startSlide() {
  let c = 0;
  let img = document.createElement("img");
  img.src = slidedata[c];
  img.style.width = "100%";
  img.style.height = "600px";
  slide.append(img);
  c++;
  inter = setInterval(function () {
    slide.innerHTML = null;
    if (c == slidedata.length) {
      c = 0;
    }
    let img = document.createElement("img");
    img.src = slidedata[c];
    img.style.width = "100%";
    img.style.height = "600px";
    slide.append(img);
    c++;
  }, 3000);
}
startSlide();

let brand = document.createElement("div");
brand.style.width = "55%";
brand.style.height = "600px";
let brand1 = document.createElement("div");
let brand2 = document.createElement("div");

let h1 = document.createElement("h1");
h1.innerText = "Today's Top picks";
h1.style.padding = "1% 0 0 2.5%";
let p1 = document.createElement("span");
p1.innerText = "See Whats catching peoples attension";
p1.style.padding = "0 0 0 2.5%";
let infodiv = document.createElement("div");
infodiv.style.display = "flex";
let infodiv1 = document.createElement("div");
let infodiv1button = document.createElement("button");
infodiv1button.innerHTML = "&#8882;";

infodiv1button.addEventListener("click", showleftswap);

infodiv1.style.marginTop = "12%";
infodiv1.append(infodiv1button);
let infodiv2 = document.createElement("div");
(infodiv2.style.display = "grid"),
  (infodiv2.style.gridTemplateColumns = "auto auto auto auto");
let infodiv2data1 = [
  {
    name: "Samsung Tv class 7 series LED 4K smart fire TV Edition Tv",
    price: 699.9,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 32” Class LED HD Smart Fire TV Edition TV",
    price: 555.5,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6247/6247254_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 55 Class F30 Series LED 4K UHD Smart Fire TV Rating",
    price: 991,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450247_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Hisense - 70 Class A6G Series LED 4K UHD Smart Android TV",
    price: 249.5,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458072_sd.jpg;maxHeight=250;maxWidth=2500",
  },
];
let infodiv2data2 = [
  {
    name: "Samsung Tv class 7 series LED 4K smart fire TV Edition Tv",
    price: 999,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6453/6453312_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 32” Class LED HD Smart Fire TV Edition TV",
    price: 1000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6445/6445425_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 55 Class F30 Series LED 4K UHD Smart Fire TV Rating",
    price: 882,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458072_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Hisense - 70 Class A6G Series LED 4K UHD Smart Android TV",
    price: 500,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=250;maxWidth=250",
  },
];
let infodiv2data3 = [
  {
    name: "Samsung Tv class 7 series LED 4K smart fire TV Edition Tv",
    price: 783,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 32” Class LED HD Smart Fire TV Edition TV",
    price: 856,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394759_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 55 Class F30 Series LED 4K UHD Smart Fire TV Rating",
    price: 1535,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Hisense - 70 Class A6G Series LED 4K UHD Smart Android TV",
    price: 453,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429416_sd.jpg;maxHeight=250;maxWidth=250",
  },
];

function showTv(d) {
  infodiv2.innerHTML = null;
  d.forEach(function (prod) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = prod.img;
    img.style.width = "150px";
    img.style.height = "100px";
    let name = document.createElement("p");
    name.innerHTML = prod.name;
    name.style.color = "blue";
    let price = document.createElement("p");
    let price1 = document.createElement("span");
    let price2 = document.createElement("span");
    price1.innerHTML = "&#36;";
    price2.innerText = prod.price;
    price.append(price1, price2);
    let button = document.createElement("button");
    button.innerText = "Add to cart";
    button.onclick = function () {
      addtocart(prod);
      showalert(prod);
    };
    div.append(img, name, price, button);
    infodiv2.append(div);
  });
}
showTv(infodiv2data1);

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

infodiv.style.marginTop = "2%";
let infodiv3 = document.createElement("div");
let infodiv3button = document.createElement("button");
infodiv3button.innerHTML = "&#8883;";
infodiv3.style.marginTop = "12%";

infodiv3button.addEventListener("click", showrightswap);

let y = 0;
function showrightswap() {
  y++;
  if (y == 0 || y == 1) {
    showTv(infodiv2data1);
  } else if (y == 2) {
    showTv(infodiv2data2);
  } else if (y == 3) {
    showTv(infodiv2data3);
    y = 0;
  }
}

let z = 0;
function showleftswap() {
  z--;
  if (z == 0 || z == -1) {
    showTv(infodiv2data1);
  } else if (z == -2) {
    showTv(infodiv2data2);
  } else if (z == -3) {
    showTv(infodiv2data3);
    z = 0;
  }
}
infodiv3.append(infodiv3button);

infodiv.append(infodiv1, infodiv2, infodiv3);
brand1.append(h1, p1, infodiv);

let brand2head = document.createElement("div");
brand2head.style.display = "flex";
brand2head.style.width = "100%";
let brand2heading = document.createElement("div");
let brand2headfirst = document.createElement("h1");
brand2headfirst.style.backgroundColor = "red";
brand2headfirst.style.color = "white";
brand2headfirst.innerText = "Deal";
let brand2headsecond = document.createElement("h1");
brand2headsecond.innerText = "Of the day";
let brand2headthird = document.createElement("p");
brand2headthird.style.color = "blue";
brand2headthird.innerText = "See bonus deals";
brand2headthird.style.marginTop = "10%";

brand2heading.append(brand2headfirst, brand2headsecond, brand2headthird);
brand2heading.style.display = "flex";
brand2heading.style.gap = "10px";
brand2heading.style.marginLeft = "2%";

brand2head.append(brand2heading);

let brand2info = document.createElement("div");
brand2info.style.display = "flex";

let brand2img = document.createElement("img");
brand2img.src =
  "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6405/6405497_sd.jpg;maxHeight=300;maxWidth=300";
brand2img.style.width = "150px";
brand2img.style.height = "165px";
brand2img.style.marginLeft = "2%";
let brand2imginfo = document.createElement("div");

let brand2imginfotext = document.createElement("p");
brand2imginfotext.textContent =
  "Insignia™ - Zero Gravity Full Body Massage Chair - Black with silver trim";
brand2imginfotext.style.color = "blue";
let brand2imginfoprice = document.createElement("p");
brand2imginfoprice.innerHTML = "&#36; 1249.99";
let brand2imginfoprice2 = document.createElement("span");
brand2imginfoprice2.innerHTML = "&#36; 1549.99";
brand2imginfoprice2.style.textDecoration = "line-through";

brand2imginfo.style.marginLeft = "2%";
brand2imginfo.append(
  brand2imginfotext,
  brand2imginfoprice,
  brand2imginfoprice2
);
brand2info.append(brand2img, brand2imginfo);
brand2.append(brand2head, brand2info);
brand.append(brand1, brand2);

brand2.style.marginTop = "2%";
cont1.append(slide, brand);

let cont2 = document.getElementById("cont2");
cont2.style.backgroundColor = "black";

let cont2info = document.createElement("h1");
cont2info.style.color = "white";
cont2info.style.textAlign = "center";
cont2info.innerText = "Together We are one RighteouSouls";
cont2info.style.fontFamily = "strong";
cont2info.style.fontSize = "60px";
let cont2info2 = document.createElement("h1");
cont2info2.style.color = "white";
cont2info2.innerText = "we will do better";
cont2info2.style.textAlign = "center";
cont2info2.style.marginTop = "-40px";
let cont2info3 = document.createElement("h3");
cont2info3.style.color = "yellow";
cont2info3.style.textAlign = "center";
cont2info3.innerText = "Learn about best buy unity";
let cont2info4 = document.createElement("div");
cont2info4.style.display = "flex";
cont2info4.style.flexBasis = "auto";

let cont2info41 = document.createElement("div");
cont2info41.style.display = "flex";
let cont2info411 = document.createElement("img");
cont2info411.src =
  "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-37875-app-curbside-vpe_der-149659.png;maxHeight=160;maxWidth=160";
cont2info411.style.width = "70px";
cont2info411.style.height = "100px";
let cont2info412 = document.createElement("h2");
cont2info412.style.width = "300px";
cont2info412.innerText = "Ready in one hour with curbside pickup";
cont2info41.append(cont2info411, cont2info412);
cont2info41.style.margin = "0 5% 0 3%";

let cont2info42 = document.createElement("div");
cont2info42.style.display = "flex";
let cont2info421 = document.createElement("img");
cont2info421.style.width = "70px";
cont2info421.style.height = "100px";
cont2info421.src =
  "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=160;maxWidth=160";
let cont2info422 = document.createElement("h2");
cont2info422.innerText = "Free next day Deliver";
cont2info42.append(cont2info421, cont2info422);
cont2info42.style.margin = "0 5% 0 8%";

let cont2info43 = document.createElement("div");
cont2info43.style.display = "flex";
let cont2info431 = document.createElement("img");
cont2info431.style.width = "70px";
cont2info431.style.height = "100px";
cont2info431.src =
  "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/gl-app-vpe-freeshippin_der1-206852.png;maxHeight=160;maxWidth=160";
let cont2info432 = document.createElement("h2");
cont2info432.innerText = "Same-day delivery";
cont2info43.append(cont2info431, cont2info432);
cont2info43.style.margin = "0 5% 0 8%";

cont2info4.append(cont2info41, cont2info42, cont2info43);
cont2info4.style.backgroundColor = "white";

cont2.append(cont2info, cont2info2, cont2info3, cont2info4);

let cont3 = document.getElementById("cont3");
cont3.style.display = "grid";
cont3.style.gridTemplateColumns = "auto auto auto";
cont3.style.gap = "2%";

let cont3data = [
  {
    name: "iPad (9th generation).",
    subname: "Accessories sold separately.",
    price: 1000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-ipad-0914-b9267384-5f98-4d90-ab2b-f1290bf23215.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Fitbit Charge 5 advanced fitness tracker.",
    subname:
      "Optimize your workout routine with personalized activity goals, a built-in GPS and a heartrate tracker.",
    price: 465,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT_446909_pol_COPE_DER-cd40f750-30e1-47e5-b8b0-832c02591c0e.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Get The Forever Purge and catch up on the rest of the Purge movies.",
    subname:
      "Own the shocking fifth installment of the Purge franchise and pick up the other Purge films on 4K Ultra HD Blu-ray, Blu-ray and more.",
    price: 5555,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-purge-mmt455867-04acea9b-469f-459c-8abc-4178c288457d.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "iTop cell phone deals.",
    subname: "Activate your new phone in store or online.",
    price: 555,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-453348-210906_DER-09602cca-300e-4ff7-a38f-37f53245f10f.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Electric vehicles.",
    subname:
      "Check out a wide array of bikes, scooters, mopeds and other e-vehicles from Unagi, Super73, SWFT, Segway and other top brands.",
    price: 999,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-446970_der-c3efc996-e176-4486-8400-a29c92ace142.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "MacBook Save up to $300 on select models.",
    subname: "Minimum savings is $50.",
    price: 999.99,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_MacBook-Pro-13-6287705-CO-62040-0526-der-158533.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Introducing the new Surface devices.",
    subname:
      "Pre-order select Surface devices and get a select Xbox controller and 3 months of Xbox Game Pass Ultimate.",
    price: 1500,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_medellin-black-0920-8e472fc3-a9b6-42bf-a9f2-6a9651ad64ed.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Fitbit Charge 5 advanced fitness tracker.",
    subname:
      "Optimize your workout routine with personalized activity goals, a built-in GPS and a heartrate tracker.",
    price: 2000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT_446909_pol_COPE_DER-cd40f750-30e1-47e5-b8b0-832c02591c0e.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "MacBook Save up to $300 on select models.",
    subname: "Accessories sold separately.",
    price: 1999,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_MacBook-Pro-13-6287705-CO-62040-0526-der-158533.jpg;maxHeight=408;maxWidth=600",
  },
];
function cont3datashow(cont3data) {
  cont3.innerHTML = null;
  cont3data.forEach(function (prod) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = prod.img;
    img.style.width = "300px";
    img.style.height = "250px";
    img.style.marginLeft = "10%";
    let name = document.createElement("p");
    name.style.color = "blue";
    name.style.marginLeft = "3%";
    name.innerText = prod.name;
    let subname = document.createElement("p");
    subname.innerText = prod.subname;
    subname.style.marginLeft = "3%";
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
    div.append(img, name, subname, price, addtocartbtn);
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

let cont61 = document.getElementById("cont61");
cont61.style.width = "95%";

let cont611data = [
  {
    name: "iPad (9th generation).",
    price: 1000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-ipad-0914-b9267384-5f98-4d90-ab2b-f1290bf23215.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Fitbit Charge 5 advanced fitness tracker.",
    price: 465,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT_446909_pol_COPE_DER-cd40f750-30e1-47e5-b8b0-832c02591c0e.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Get The Forever Purge and catch up on the rest of the Purge movies.",
    price: 468,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-purge-mmt455867-04acea9b-469f-459c-8abc-4178c288457d.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "iPad (9th generation).",
    price: 1000,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-ipad-0914-b9267384-5f98-4d90-ab2b-f1290bf23215.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Fitbit Charge 5 advanced fitness tracker.",
    price: 465,
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT_446909_pol_COPE_DER-cd40f750-30e1-47e5-b8b0-832c02591c0e.jpg;maxHeight=504;maxWidth=740",
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
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_MacBook-Pro-13-6287705-CO-62040-0526-der-158533.jpg;maxHeight=408;maxWidth=600",
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
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_MacBook-Pro-13-6287705-CO-62040-0526-der-158533.jpg;maxHeight=408;maxWidth=600",
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

let savedata = [
  {
    name: "Samsung - Galaxy Z Fold3 5G 256GB (Unlocked) - Phantom Black",
    price: "$1,499.99",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6466/6466005_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    name: "Amazon - Fire HD 8 10th Generation - 8",
    price: "$89.99",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412943_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    name: "NortonLifeLock - 360 Deluxe (3-Device) (1-Year Subscription with Auto Renewal) [Digital]",
    price: "$79.99",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6346/6346689_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    name: "Razer - Huntsman Mini 60% Wired Gaming Linear Optical Switch Keyboard with RGB Chroma Backlighting - Mercury",
    price: "$129.99",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425356_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    name: "Samsung - Galaxy S20 FE 5G 128GB - Cloud Navy (AT&T)",
    price: "$699.99",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6430/6430638_sd.jpg;maxHeight=640;maxWidth=550",
  },
];

let searchdata = [
  {
    name: "Samsung Tv class 7 series LED 4K smart fire TV Edition Tv",
    price: 699.9,
    search: "Samsung",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401722_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 32” Class LED HD Smart Fire TV Edition TV",
    price: 555.5,
    search: "Insignia",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6247/6247254_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 55 Class F30 Series LED 4K UHD Smart Fire TV Rating",
    price: 991,
    search: "Inisignia F30",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450247_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Hisense - 70 Class A6G Series LED 4K UHD Smart Android TV",
    price: 249.5,
    search: "Hisense",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6458/6458072_sd.jpg;maxHeight=250;maxWidth=2500",
  },
  {
    name: "Samsung Tv class 7 series LED 4K smart fire TV Edition Tv",
    price: 783,
    search: "Samsung class 7",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401738_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 32” Class LED HD Smart Fire TV Edition TV",
    price: 856,
    search: "Insignia - 32",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6394/6394759_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Insignia™ - 55 Class F30 Series LED 4K UHD Smart Fire TV Rating",
    price: 1535,
    search: "Insignia - 55",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6401/6401735_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "Hisense - 70 Class A6G Series LED 4K UHD Smart Android TV",
    price: 453,
    search: "Hisense - 70",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429416_sd.jpg;maxHeight=250;maxWidth=250",
  },
  {
    name: "iPad (9th generation).",
    price: 1000,
    search: "ipad",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-ipad-0914-b9267384-5f98-4d90-ab2b-f1290bf23215.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Fitbit Charge 5 advanced fitness tracker.",
    price: 465,
    search: "Fitbit",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/MMT_446909_pol_COPE_DER-cd40f750-30e1-47e5-b8b0-832c02591c0e.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "Get The Forever Purge and catch up on the rest of the Purge movies.",
    price: 5555,
    search: "Purge",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-purge-mmt455867-04acea9b-469f-459c-8abc-4178c288457d.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "iTop cell phone deals.",
    price: 555,
    search: "iTop",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-453348-210906_DER-09602cca-300e-4ff7-a38f-37f53245f10f.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Electric vehicles.",
    price: 999,
    search: "Electric vehicle",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-MMT-446970_der-c3efc996-e176-4486-8400-a29c92ace142.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "MacBook Save up to $300 on select models.",
    price: 999.99,
    search: "MacBook",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_MacBook-Pro-13-6287705-CO-62040-0526-der-158533.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "Introducing the new Surface devices.",
    price: 1500,
    search: "Surface device",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol_medellin-black-0920-8e472fc3-a9b6-42bf-a9f2-6a9651ad64ed.jpg;maxHeight=408;maxWidth=600",
  },
  {
    name: "iPad (9th generation).",
    price: 1000,
    search: "iPad 9",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/pol-ipad-0914-b9267384-5f98-4d90-ab2b-f1290bf23215.jpg;maxHeight=504;maxWidth=740",
  },
  {
    name: "bObsweep - Bob PetHair Robot Vacuum and Mop - Rouge",
    price: 1000,
    search: "bObsweep",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4728/4728202_sd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save $30 or $35 on select Walker Edison TV stands in black or driftwood style.",
    price: 3005,
    search: "TV stands",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-01-845ec3ac-3c32-478e-8bfd-de3554cb2eb8.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save $10 on Sideclick universal remote attachment for Amazon Fire TV, Apple TV®, Google Chromecast, NVIDIA Shield TV or Roku streaming devices.",
    price: 199,
    search: "TV",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-02-001e73b1-8f5d-4bf0-995e-9d68c3804783.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save up to 37% on select GUNNAR computer and gaming glasses.Minimum savings is 30%.Shop Now",
    price: 99,
    search: "glasses",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-03-94f72ffc-8c9a-4144-be6c-f12bdf903c07.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Lenovo - Smart Frame 21.5",
    price: 249,
    search: "Lenovo",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6455/6455115_rd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save on Occasions 6-ft. tall reaper or 8.5-ft. wide inflatable pumpkin patch.",
    price: 999.99,
    search: "reaper",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-04-d6a70f54-b5cc-4bea-9b73-72600e816419.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Nimble - Eco - Friendly Convertible Pad - Gray",
    price: 1500,
    search: "Nimble",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6433/6433241_sd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save on select ADATA internal solid state drives.",
    price: 2000,
    search: "ADATA",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-06-85bb07b0-a346-43ef-9104-b3ce8de88205.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "SWFT - ZIP eBike w/ 37mi Max Operating Range & 19.8 mph Max Speed - Black",
    price: 2199,
    search: "eBike",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6464/6464325_sd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Barbasol - 20-Piece Ultimate Grooming Pro Hair Clipper Kit - Black",
    price: 19.9,
    search: "Hair Clipper",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6432/6432851_rd.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Save 17% on Energizer MAX 16-pack of AA or AAA alkaline batteries.",
    price: 29,
    search: "Batteries",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/dam/GL-67194-dotd-093021-05-1d14717d-b1c5-45cf-9858-30a74c3c80a9.jpg;maxHeight=302;maxWidth=504",
  },
  {
    name: "Insignia™ - Bagless Upright Vacuum - Black",
    price: 59,
    search: "Insignia",
    img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6454/6454802_rd.jpg;maxHeight=150;maxWidth=225",
  },
];

let onlineSearch = document.getElementById("onlineSearch");

// onlineSearch.addEventListener("click");
let searchinpdata = document.getElementById("inputdata");
var sets;
searchinpdata.addEventListener("input", startsearchingfordata);

function startsearchingfordata(e) {
  onlineSearch.textContent = e.target.value;
  onlineSearch.style.position = "relative"
  var inpt = searchinpdata.value;

  debounce(startshowofsug, 3000);
  function debounce(startshowofsug, time) {
    if (sets) {
      clearTimeout(sets);
    }
    sets = setTimeout(() => {
      startshowofsug(inpt);
    }, time);
  }

  if (inpt != " ") {
    let searchR = document.getElementById("onlineSearch");
    searchR.style.display = "block";
    searchR.style.backgroundColor = "white";
    let out = searchinpdata.value;
    console.log(out);
  }
  if (inpt == "") {
    let searchR = document.getElementById("onlineSearch");
    searchR.style.display = "none";
    let showdatainpage = document.getElementById("newresults");
    showdatainpage.innerHTML = null;
  }
}

async function startshowofsug(data) {
  onlineSearch.textContent = null;
  let res = await fetch(
    `https://serpapi.com/search.json?engine=google&q=${data}&google_domain=google.com&gl=us&hl=en&tbm=shop&start=8&num=8&api_key=a7045d2eebab85bbc1dc3b6f8077dfb18392b5c6137b39c8e7ecb7ff5e572415`
  );

  let respdata = await res.json();

  let newdata = respdata.shopping_results;
  console.log(respdata.shopping_results);
  newdata.forEach(function (d) {
    let p = document.createElement("p");
    p.innerText = d.title;
    p.onclick = function () {
      console.log(d);
      showMoreInfo(d);
    };
    onlineSearch.append(p);
  });
}

function showMoreInfo(d) {
  let showdatainpage = document.getElementById("newresults");
  showdatainpage.style.marginLeft = "20%";

  let div = document.createElement("div");
  div.style.width = "250px";
  let img = document.createElement("img");
  img.src = d.thumbnail;
  img.style.width = "200px";
  img.style.marginLeft = "25px";
  img.style.height = "250px";
  let name = document.createElement("p");
  name.style.color = "blue";
  name.style.marginLeft = "3%";
  name.innerText = d.title;
  let price = document.createElement("p");
  price.innerText = d.price;
  let addtocartbtn = document.createElement("button");
  addtocartbtn.innerText = "Add to cart";
  addtocartbtn.onclick = function () {
    Swal.fire("Good job!", "Added product to Cart Successfully", "success");
  };
  addtocartbtn.backgroundColor = "white";
  addtocartbtn.style.marginLeft = "3%";
  div.append(img, name, price, addtocartbtn);
  showdatainpage.append(div);
}
