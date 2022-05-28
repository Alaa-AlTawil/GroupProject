var mail = document.getElementById("loginemail");
var pass = document.getElementById("loginpassword");
document.getElementById("loginbtn").addEventListener("click", function1)

function function1() {
    if(mail.value=="" || pass.value==""){
        alert("fill all  boxes");
    }
    else{
        let data1=new FormData();
        data1.append("Email",mail.value);
        data1.append("Password",pass.value);

    axios({
            method: 'post',
            url: 'http://localhost/workshopSe/Login.php',
            data: data1,
        })
        .then(function (response) {
            if(response.data["response"]=="Invalid"){
               alert("incorrect email or password")
            }

            if (response.data["role"]=="user"){
                location.href='http://127.0.0.1:5500/html/user.html';

            }
            else if(response.data["role"]=="admin"){
                location.href='http://127.0.0.1:5500/html/admin.html';   
            }

        })
}}