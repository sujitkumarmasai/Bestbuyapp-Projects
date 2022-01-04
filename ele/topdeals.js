let tata = JSON.parse(localStorage.getItem("username"));
let user2 = document.getElementById("user2");
user2.append(tata[tata.length - 1]);
