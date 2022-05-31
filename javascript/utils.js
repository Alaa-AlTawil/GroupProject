function Base64ToImage(base64img, callback) {
    var img = new Image();
    img.onload = function () {
        callback(img);
    };
    img.src = base64img;
}
function userfromid(id, cb) {
    let udata = new FormData();
    udata.append('U_Id', id);

    axios({
        method: 'post', 
        url:'http://localhost/Fooder/user_by_id.php',
        data: udata
    }).then(function(response) {
        cb(response.data)
    })
}