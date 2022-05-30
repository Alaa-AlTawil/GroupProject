var mail = document.getElementById("loginemail");
var pass = document.getElementById("loginpassword");
document.getElementById("loginbtn").addEventListener("click", function1);
document.getElementById("signbtn").addEventListener("click", function3);
function function3() {
  document.querySelectorAll(".login").forEach((item) => {
    item.classList.add("hidden");
  });
  document.querySelectorAll(".Signup").forEach((item) => {
    item.classList.add("appear");
  });
  document.querySelectorAll(".Signup").forEach((item) => {
    item.classList.remove("Signup");
  });
}
function function1() {
  if (mail.value == "" || pass.value == "") {
    alert("fill all  boxes");
  } else {
    let data1 = new FormData();
    data1.append("Email", mail.value);
    data1.append("Password", pass.value);

    axios({
      method: "post",
      url: "http://localhost/workshopSe/Login.php",
      data: data1,
    }).then(function (response) {
      if (response.data["response"] == "Invalid") {
        alert("incorrect email or password");
      } else if (response.data["role"] == "admin") {
        location.href = "http://127.0.0.1:5500/html/admin.html";
      } else {
        location.href = "http://127.0.0.1:5500/html/user.html";
      }
    });
  }
}
var fname = document.getElementById("signupname");
var lname = document.getElementById("signuplast");
var email = document.getElementById("signupemail");
var password = document.getElementById("signuppassword");
var confpass = document.getElementById("confpassword");
document.getElementById("signupbtn").addEventListener("click", function2);

function function2() {
  if (
    fname.value == "" ||
    lname.value == "" ||
    email.value == "" ||
    password.value == "" ||
    confpass.value == ""
  ) {
    alert("fill all data please");
  } else if (password.value != confpass.value) {
    alert("confirm password should be the same");
  } else {
    let data2 = new FormData();
    data2.append("F_Name", fname.value);
    data2.append("L_Name", lname.value);
    data2.append("Email", email.value);
    data2.append("Password", password.value);
    axios({
      method: "post",
      url: "http://localhost/workshopSe/signUp.php",
      data: data2,
    }).then(function (response) {
      console.log(response.data);
    });
  }
}
