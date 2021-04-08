
$("#submitButton").click(function(event) {
    event.preventDefault();

    var data = {
        "username" : $("#uname").val(),
        "firstName" : $("#fname").val(),
        "lastName" : $("#lname").val(),
        "age" : $("#age").val(),
        "password" : $("#password").val()
    }

    $.ajax({
        url: 'https://teenhelper.herokuapp.com/api',
        type: 'Post',
        data: JSON.stringify(data),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        error: function (xhr) {
            alert('Error: ' + xhr.statusText);
        },
        success: function () {
            window.location.replace("index.html");
        }
    }); 

})