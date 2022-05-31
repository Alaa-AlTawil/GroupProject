// var n = localStorage.getItem("user_id");
// var feedbk= localStorage.getItem("feedb");
// var star=localStorage.getItem("strrsate")
// var rdata = JSON.parse(localStorage.getItem("currentRestaurant"))

// let udata= new FormData();
// udata.append("U_Id",n);
// let revData=new FormData();
// revData.append("Feedback",feedbk);
// revData.append("User_U_Id",n);
// revData.append("Restaurant_R_Id",rdata.id);
// revData.append("Rating",star);


// axios({
//     method:'post',
//     url:'http://localhost/Fooder/add_review',
//     data:revData,
// }).then(function (response){
// console.log(response.data);
// })
// axios({
//     method:'post',
//     url: 'http://localhost/Fooder/user_by_id',
//     data: udata,
// }).then(function(response){
//     var uname=response.data["U_Name"]

// })
// var reviewsHeaderdiv=document.createElement("div");
// var reviewsDiv=document.createElement("div");
// var unameth=document.createElement("h3");
// var rnameth=document.createElement("h3");
// var fbTh=document.createElement("h3");
// var acceptTh=document.createElement("h3");
// var rejectTh=document.createElement("h3");

var fbscontainer = document.getElementsByClassName('fbscontainer')[0];

axios({ method: 'get', url:'http://localhost/Fooder/get_review.php',})
.then(function (response){
    for (let i = 0; i < response.data.length; i++) {
        const review = response.data[i];
        console.log(review);
        if (review.stat !== null) {
            continue;
        }

        let element = document.createElement('tr');
        element.innerHTML = `
        <td>${review.User_U_Id}</td>
        <td>${review.Restaurant_R_Id}</td>
        <td>${review.Feedback}</td>
        <td>${review.Rating}</td>
        <td class="actions">
            <span style="background: #31e931;">✔</span>
            <span style="background: #e92f2f;">✖</span>
        </td>
        `;        
        let buttons = element.querySelectorAll('span');
        let acceptBtn = buttons[0];
        let rejectBtn = buttons[1];

        function setStat(value) {
            let dataNew=new FormData();
            dataNew.append("stat",value);
            dataNew.append("ri",review.Rev_Id)
            

            axios({
                method:'post',
                url:'http://localhost/Fooder/accept_reject_review.php',
                data: dataNew,
            })
        }
        acceptBtn.onclick = () => {
            element.remove();
            setStat(1);
            alert('accepted');
        }
        rejectBtn.onclick = () => {
            element.remove();
            setStat(0);
            alert('rejected');
        }
        
        fbscontainer.append(element);
    }
})

