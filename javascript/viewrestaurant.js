axios({
    method: 'get',
    url: 'http://localhost/Fooder/get_restaurant.php',
})
    .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {

            let base64img = response.data[i]["Img"];
            let t = response.data[i]["R_Name"];
            let d = response.data[i]["Description"];
            let i_d = response.data[i]["R_Id"];

            Base64ToImage(base64img, function (img) {
                img.addEventListener("click", function () {
                    localStorage.setItem("currentRestaurant", JSON.stringify({
                        img: base64img,
                        name: t,
                        desc: d,
                        id: i_d,
                    }))
                    location.href = "http://127.0.0.1:5500/GroupProject/html/user_review.html";
                })
                const newDiv = document.createElement("div");
                newDiv.append(img, t)
                newDiv.classList.add("restor");


                document.getElementById('addrestaurant').append(newDiv)
            });
        }

    })