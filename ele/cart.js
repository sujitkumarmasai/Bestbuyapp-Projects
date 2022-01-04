let cont = document.getElementById("cont");
let cont1 = document.getElementById("cont1");
cont1.style.margin = "2%";
cont1.style.width = "69%";
cont1.style.display = "grid";
cont1.style.gridTemplateColumns = "auto auto auto";
let cont2 = document.getElementById("cont2");
let data = JSON.parse(localStorage.getItem("bestbuycart"));
let div1 = document.createElement("div");
let msg = document.createElement("h2");

msg.innerText = "Ooops! Your Cart is empty";
msg.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;";
let msg1 = document.createElement("p");
msg1.innerText =
  "Just browsing? You can create an account and start earning reward points whenever you make a purchase.";
msg.style.marginTop = "-2%";
msg1.style.marginTop = "-1%";

if (data == null) {
  div1.append(msg, msg1);
  cont.append(div1);
  cont.style.marginTop = "3%";
}
if (data.length == 0) {
  div1.append(msg, msg1);
  cont.append(div1);
  cont.style.marginTop = "3%";
}

let div2 = document.createElement("div");
let num = document.createElement("h2");
let no = document.createElement("h2");
num.innerHTML = "Number Of items in Cart : &nbsp;";
num.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;";
no.innerText = data.length;

let numdiv = document.createElement("div");

numdiv.append(num, no);
numdiv.style.display = "flex";
if (data.length > 0) {
  div2.append(numdiv, msg1);
  cont.append(div2);
}

function showcart() {
  data.forEach(function (prod) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = prod.img;
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.marginLeft = "5%";
    img.style.marginTop = "2%";
    let name = document.createElement("p");
    name.style.color = "blue";
    name.style.marginLeft = "1.5%";
    name.innerText = prod.name;
    let price = document.createElement("p");
    let pricesy = document.createElement("spna");
    pricesy.innerHTML = "&#36;";
    price.style.marginLeft = "1.5%";
    let pricemo = document.createElement("span");
    pricemo.innerText = Number.parseFloat(prod.price).toFixed(2);

    let div2 = document.createElement("div");
    div2.style.display = "flex";
    let btn1 = document.createElement("button");
    btn1.innerText = "-";
    btn1.style.fontSize = "19px";
    let btn2 = document.createElement("input");
    btn2.value = 1;
    btn2.style.width = "45px";
    btn2.style.textAlign = "center";
    let btn3 = document.createElement("button");
    btn3.innerText = "+";
    btn3.style.fontSize = "19px";

    btn1.onclick = function () {
      negative(btn2, pricemo, prod);
    };
    btn3.onclick = function () {
      positive(btn2, pricemo, prod);
    };

    div2.append(btn1, btn2, btn3);
    price.append(pricesy, pricemo);
    div.append(img, name, price, div2);
    cont1.append(div);
  });
}
showcart(data);

let c = 0;
function checkpromo(e) {
  e.preventDefault();
  let input = document.getElementById("checkpro");
  let promo = input.promo.value;
  let tot = document.getElementById("totalprice");
  //c++
  if (promo == "MasaiSchool") {
    if (c == 0) {
      tot.innerHTML = tot.innerHTML * 0.7;
      c++;
    } else if (c > 0) {
      alert("You have entered same promo code twice");
      tot.textContent = tot.textContent;
    }

    input.promo.value = "";
  } else {
    alert("Invalid Promocode");
    input.promo.value = "";
  }
}

let totalprice = document.getElementById("totalprice");
let tot = 0;
let par = JSON.parse(localStorage.getItem("bestbuycart"));
par.forEach(function (par) {
  tot = tot + par.price;
});
totalprice.append(tot);

function positive(btn2, pricemo, prod) {
  btn2.value = +btn2.value + 1;

  pricemo.innerText = +pricemo.innerText + prod.price;
  //console.log(pricemo.innerText)
  let totalprice = document.getElementById("totalprice");
  let tot = 0;
  let par = JSON.parse(localStorage.getItem("bestbuycart"));
  par.forEach(function (par) {
    tot = tot + par.price;
  });
  //console.log(par.length)
  let alltotal = tot + +pricemo.innerHTML - prod.price;
  totalprice.innerHTML = "";
  totalprice.append(Number.parseFloat(alltotal).toFixed(2));

  let data = JSON.parse(localStorage.getItem("bestbuycart"));
  let div2 = document.createElement("div");
  let num = document.createElement("h2");
  let no = document.createElement("h2");
  num.innerHTML = "Number Of items in Cart : &nbsp;";
  num.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;";
  no.innerText = data.length;
  console.log(no.innerHTML);
  let msg1 = document.createElement("p");
  msg1.innerText =
    "Just browsing? You can create an account and start earning reward points whenever you make a purchase.";
  msg.style.marginTop = "-2%";
  msg1.style.marginTop = "-1%";

  let numdiv = document.createElement("div");
  numdiv.style.display = "flex";
  let cont = document.getElementById("cont");
  cont.innerHTML = "";
  let totalcount = document.createElement("h2");
  totalcount.innerHTML = +no.innerHTML + +btn2.value - 1;

  numdiv.append(num, totalcount);

  div2.append(numdiv, msg1);
  cont.append(div2);
}

function negative(btn2, pricemo, prod) {
  if (+btn2.value > 1) {
    btn2.value = +btn2.value - 1;
    pricemo.innerText = +pricemo.innerText - prod.price;

    let totalprice = document.getElementById("totalprice");
    let tot = 0;
    let par = JSON.parse(localStorage.getItem("bestbuycart"));
    par.forEach(function (par) {
      tot = tot + par.price;
    });
    let alltotal = tot + +pricemo.innerHTML - prod.price;
    console.log(prod.price);

    totalprice.innerHTML = "";
    totalprice.append(Number.parseFloat(alltotal).toFixed(2));

    let data = JSON.parse(localStorage.getItem("bestbuycart"));
    let div2 = document.createElement("div");
    let num = document.createElement("h2");
    let no = document.createElement("h2");
    num.innerHTML = "Number Of items in Cart : &nbsp;";
    num.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;";
    no.innerText = data.length;
    //console.log(no.innerHTML)
    let msg1 = document.createElement("p");
    msg1.innerText =
      "Just browsing? You can create an account and start earning reward points whenever you make a purchase.";
    msg.style.marginTop = "-2%";
    msg1.style.marginTop = "-1%";

    let numdiv = document.createElement("div");
    numdiv.style.display = "flex";
    let cont = document.getElementById("cont");
    cont.innerHTML = "";
    let totalcount = document.createElement("h2");
    totalcount.innerHTML = +no.innerHTML + +btn2.value - 1;

    numdiv.append(num, totalcount);

    div2.append(numdiv, msg1);
    cont.append(div2);
  }
}

if (localStorage.getItem("payment") === null) {
  localStorage.setItem("payment", JSON.stringify([]));
}
let pay = document.getElementById("totalprice").innerHTML;
//console.log(pay)
function makepayment() {
  //e.preventDefault();

  var amount = {
    price: pay,
  };
  var arr = JSON.parse(localStorage.getItem("payment"));
  arr.push(amount);
  localStorage.setItem("payment", JSON.stringify(arr));

  window.location.href = "payment.html";
}
let tata = JSON.parse(localStorage.getItem("username"));
let user2 = document.getElementById("user2");
user2.append(tata[tata.length - 1]);
