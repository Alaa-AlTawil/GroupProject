let r = document.getElementById('addrestaurant');
let data = JSON.parse(localStorage.currentRestaurant);
Base64ToImage(data.img, function(img) {
    if (img.width >= img.height) {
        img.classList.add('landscape')
    } else {
        img.classList.add('portrait')
    }
    var div = document.createElement("div")
    
    var h = document.createElement("h1");
    h.innerText = data.name;

    var d=document.createElement("p");
    d.innerText=data.desc;
    
    div.append(h,img,d)
    r.append(div);
    div.classList.add("view")
})

let tdata = new FormData();
tdata.append('rid', data.id)
axios({
    method: "post",
    url: 'http://localhost/Fooder/stars.php',
    data: tdata

}).then(function(response) {
    let rating = response.data[0]['round(avg(Rating),1)'];
   document.getElementsByClassName('ins')[0].value = rating; 
})

var n = localStorage.getItem("user_id");
var feedbk="";
var rate=0;
var submit=document.getElementById("submit_fb");
var text=document.getElementById("ta");
var reating=document.getElementById("strfb");

submit.addEventListener('click', function() {
    feedbk=text.value;
    rate=reating.value;
    if (rate == '') {
        alert('You must provide a rating!');
        return;
    }
    
    let revData=new FormData();
    revData.append("fb",feedbk);
    revData.append("uid",n);
    revData.append("rid",data.id);
    revData.append("rate",rate);
    axios({
        method:'post',
        url:'http://localhost/Fooder/add_review.php',
        data:revData,
    })
});


// Load Reviews
let reviews = document.getElementById('reviews');
axios({ 
    method: 'get', 
    url:'http://localhost/Fooder/get_review.php'
}).then(function(response) {
    for (let i = 0; i < response.data.length; i++) {
        const review = response.data[i];
        if (review.stat === 1 && review.Restaurant_R_Id == data.id) {
            userfromid(review.User_U_Id, function(userData) {
                let userName = userData['f_name'] + ' '  + userData['l_name'];
                let tr = document.createElement('tr');
                tr.innerHTML = 
                `
                <td>${userName} ( ${review.Rating}🌟 )</td>
                <td>${review.Feedback}</td>
                `;
                reviews.append(tr);
            })
        }
    }
});
