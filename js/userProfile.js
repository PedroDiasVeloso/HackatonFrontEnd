var id = 0;
var thisRank = 0;

if (sessionStorage.getItem("LoginID") == null) {
    id = sessionStorage.getItem("UserID");
}
else { id = sessionStorage.getItem("LoginID"); }

$(document).ready(function () {
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
        thisRank = data.rank;
        for(i = (data.inBox.length) - 1 ; i >=0 ; i--){
            $("#scroll").append("<p>" + data.inBox[i] + "</p>");
        }

        $.ajax({
            url: 'https://teenhelper.herokuapp.com/api/users',
            type: 'Get',
            error: function (xhr) {
                alert('Error: ' + xhr.statusText);
            },
            success: function (result) {
                for(i = 0; i < result.length; i++){
                    if(result[i].rank == thisRank || result[i].rank == thisRank-1 || result[i].rank == thisRank+1){
                        $("#rankSpace").append("<p>" + result[i].username + " also has a " + result[i].rank + ". The same as you , contact him! Maybe you could be friends!</p>")
                    }
                }
            }
        });
        
    }
});



$("#messageButton").click(function (event) {
    event.preventDefault();

    var data = {
        "username": $("#inputUsername").val(),
        "message": $("#inputMessage").val()
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



function sendBack() {
    window.location.replace("loginPage.html");
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

