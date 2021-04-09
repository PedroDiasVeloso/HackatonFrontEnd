var id = 0;
var thisRank = 0;
var thisName = "";
var thisAge = 0;

if (sessionStorage.getItem("LoginID") == null) {
    id = sessionStorage.getItem("UserID");
}
else { id = sessionStorage.getItem("LoginID"); }

$(document).ready(function () {
    $("#this").text("Hello");

});



$.ajax({
    url: 'https://b-fam.herokuapp.com/api/' + id,
    type: 'Get',
    datatype: "json",
    assync: false,
    contentType: "application/json; charset=utf-8",
    error: function (xhr) {
        alert("No profile found!");
    },
    success: function (data) {
        console.log(data);
        thisRank = data.rank;
        thisName = data.username;
        thisAge = data.age;
        $("#userNamePlace").text(data.username);
        $("#namePlace").text(data.firstName + " " + data.lastName);
        $("#rankPlace").text(data.rank);
        
        for(i = (data.inBox.length) - 1 ; i >=0 ; i--){
            $("#scroll").append("<p>" + data.inBox[i] + "</p>");
        }

        $.ajax({
            url: 'https://b-fam.herokuapp.com/api/users',
            type: 'Get',
            error: function () {
                alert("No profile found!");
            },
            success: function (result) {
                for(i = 0; i < result.length; i++){
                    if((result[i].rank == thisRank || result[i].rank == thisRank-1 || result[i].rank == thisRank+1) && result[i].username != thisName ){
                        if(thisAge < 18){
                            if(result[i].age < 18){
                                $("#rankSpace").append("<p>" + result[i].username + " also has a " + result[i].rank + "rank. The same as you , contact him! Maybe you could be friends!</p>")
                            }
                        }
                        else if(thisAge >= 18){
                            if(result[i].age >=18){
                                $("#rankSpace").append("<p>" + result[i].username + " also has a " + result[i].rank + "rank. The same as you , contact him! Maybe you could be friends!</p>")
                            }
                        }
                        
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
        url: 'https://b-fam.herokuapp.com/api/message/' + id,
        type: 'Post',
        data: JSON.stringify(data),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        error: function (xhr) {
            alert("Error sending message, please try again.");
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

