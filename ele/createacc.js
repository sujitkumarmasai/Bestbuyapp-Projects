function createaccount(e) {
  //e.preventDefault();
  let firstname = document.getElementById("firstname").value;
  //console.log(name)
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmpassword = document.getElementById("confirmpassword").value;
  let number = document.getElementById("number").value;

  if (localStorage.getItem("bestbuyuserdata") === null) {
    localStorage.setItem("bestbuyuserdata", JSON.stringify([]));
  }

  let user = {
    name: firstname,
    lastname: lastname,
    email: email,
    password: password,
    number: number,
  };
  if (
    firstname == "" ||
    lastname == "" ||
    email == "" ||
    password == "" ||
    confirmpassword == "" ||
    number == ""
  ) {
    alert("Incomplete Credentials");
  } else if (password != confirmpassword) {
    alert("Password Not matching");
  } else {
    let arr = JSON.parse(localStorage.getItem("bestbuyuserdata"));
    arr.push(user);
    localStorage.setItem("bestbuyuserdata", JSON.stringify(arr));
    firstname = "";
    lastname = "";
    email = "";
    password = "";
    confirmpassword = "";
    number = "";
  }
}
