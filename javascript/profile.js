var name1 = document.getElementById("changename");
var lname = document.getElementById("changelname");
var mail = document.getElementById("changeemail");
var pass = document.getElementById("changepassword");
document.getElementById("changeprofile").addEventListener("click", function1)

function function1() {
    if (name1.value == "" || lname.value == "" || pass.value == "" || mail.value == "") {
        alert("fill all  boxes");
    } else {
        let data1 = new FormData();
        data1.append("Fname", name1.value);
        data1.append("Lname", lname.value);
        data1.append("email", mail.value);
        data1.append("Password", pass.value);

        axios({
                method: 'post',
                url: 'http://localhost/workshopSe/edit_profile.php',
                data: data1,
            })
            .then(function (response) {
                console.log(response.data)
                alert("userupdated")

            })
    }
}