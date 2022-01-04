function signinbest(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let par = JSON.parse(localStorage.getItem("bestbuyuserdata"));

  var a = 0;
  if (email == "" || password == "") {
    alert("Incomplete Credentials");
  } else {
    par.forEach(function (par) {
      if (email == par.email && password == par.password) {
        a++;
        tohome(par.name);
      }
    });
    if (a > 0) {
      alert("Signed In Successfully");
      window.location.href = "aamainpagebestbuy.html";
    } else {
      alert("Invalid Credentials");
    }
  }
}

if (localStorage.getItem("username") == null) {
  localStorage.setItem("username", JSON.stringify([]));
}
function tohome(da) {
  console.log(da);
  let arr = JSON.parse(localStorage.getItem("username"));
  arr.push(da);
  localStorage.setItem("username", JSON.stringify(arr));
}
tohome;
