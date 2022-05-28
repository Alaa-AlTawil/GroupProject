axios({ method: 'get', url:'http://localhost/workshopSe/adminuserlist.php',})
.then(function (response){
    console.log(response.data[0]["F_Name"])
    document.getElementById("listtable").innerHTML="<table ><tr><th>name</th><th>lastname</th><th>email</th><th>password</th></tr></table>"
    for (var i=0; i<response.data.length;i++){
        document.getElementById("listtable").innerHTML +="<table ><tr><td>"+response.data[i]["F_Name"]+"</td><td>"+response.data[i]["L_Name"]+"</td><td>"+response.data[i]["Email"]+"</td><td>"+response.data[i]["Password"]+"</td></tr></table>"; 
    }
})