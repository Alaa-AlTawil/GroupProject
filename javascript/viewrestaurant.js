axios({
  method: "get",
  url: "http://localhost/workshopSe/get_restaurant.php",
}).then(function (response) {
  for (var i = 0; i < response.data.length; i++) {
    console.log(response.data);
    var base64img = response.data[i]["Img"];
    let rid = response.data[i]["R_Id"];
    let t = response.data[i]["R_Name"];
    let d = response.data[i]["Description"];

    function Base64ToImage(base64img, callback) {
      var img = new Image();
      img.onload = function () {
        callback(img);
      };
      img.src = base64img;
    }
    Base64ToImage(base64img, function (img) {
      const newDiv = document.createElement("div");
      newDiv.id = rid;
      newDiv.append(t, img, d);
      newDiv.classList.add("restor");
      newDiv.addEventListener("click", function () {
        localStorage.setItem("Img", this.id);
        location.href = "http://127.0.0.1:5500/html/user_review.html";
      });

      document.getElementById("addrestaurant").append(newDiv);
    });
  }
});
