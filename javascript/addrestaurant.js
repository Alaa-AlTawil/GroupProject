var title = document.getElementById("addtitle");
var image = document.getElementById("addimage");
var desc = document.getElementById("adddescription");
var s;
document.getElementById("addrestbtn").addEventListener("click",function2);
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      s=reader.result;
    }
    reader.readAsDataURL(file);
  }
function function2(){ 

    if (title.value=="" ||image.value=="" ||desc.value==""){
        alert("fill all data please");
    }
    else{
        
        
        let data2=new FormData();
        data2.append("R_name",title.value);
        data2.append("Desc",desc.value);
        data2.append("Img",s);
        
        axios({
            method: 'post',
            url: 'http://localhost/Fooder/add_restaurant.php',
            data: data2,
        })
        .then(function (response) {
            console.log(response.data)
           

        })

    }
}
