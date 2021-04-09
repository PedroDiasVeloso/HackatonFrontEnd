var id = 0;

if(sessionStorage.getItem("LoginID") == null){
    id = sessionStorage.getItem("UserID");
}
else{id = sessionStorage.getItem("LoginID");}


$(document).ready(function(){
    $("#this").text("Hello");
});




$.ajax({
    url: 'https://teenhelper.herokuapp.com/api/' + id,
    type: 'Get',
    datatype: "json",
    assync: false,
    contentType: "application/json; charset=utf-8",
    error: function (xhr) {
        alert('Error: ' + xhr.statusText);
    },
    success: function (data) {
        console.log(data);

    }
}); 


$("#messageButton").click(function(event) {
    event.preventDefault();

    var data = {
        "username" : $("#inputUsername").val(),
        "message" : $("#inputMessage").val()
    }

    $.ajax({
        url: 'https://teenhelper.herokuapp.com/api/message/' + id,
        type: 'Post',
        data: JSON.stringify(data),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        error: function (xhr) {
            alert('Error: ' + xhr.statusText);
        },
        success: function (received) {
            location.reload();
        }
    }); 
})



function sendBack (){
    window.location.replace("loginPage.html");
}

