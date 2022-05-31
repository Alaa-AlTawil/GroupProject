axios({
    method: "get",
    url: "http://localhost/workshopSe/adminuserlist.php",
  }).then(function (response) {
    console.log(response.data[0]["F_Name"]);
    document.getElementById("listtable").innerHTML =
      " <tr><th>Name</th><th>Lastname</th><th>Email</th></tr>";
    for (var i = 0; i < response.data.length; i++) {
      document.getElementById("listtable").innerHTML +=
        "<tr><td>" +
        response.data[i]["F_Name"] +
        "</td><td>" +
        response.data[i]["L_Name"] +
        "</td><td>" +
        response.data[i]["Email"] +
        "</td></tr>";
    }
  });
  