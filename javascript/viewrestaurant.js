axios({
        method: 'get',
        url: 'http://localhost/workshopSe/get_restaurant.php',
    })
    .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
            console.log(response.data)
            var base64img = response.data[i]["Img"];
            let t= response.data[i]["R_Name"]
            let d=response.data[i]["Description"]
            function Base64ToImage(base64img, callback) {
                var img = new Image();
                img.onload = function () {
                    callback(img);
                };
                img.addEventListener("click",function(){
                    location.href="http://127.0.0.1:5500/html/user_review.html"
                })
                img.src = base64img;
            }
            Base64ToImage(base64img, function (img) {
                const newDiv = document.createElement("div");
                newDiv.append(t,img)
                newDiv.classList.add("restor");


                document.getElementById('addrestaurant').append(newDiv)
            });
        }

    })