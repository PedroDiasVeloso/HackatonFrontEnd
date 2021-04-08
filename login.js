$("#loginbutton").click(function(event) {
    event.preventDefault();

    var data = {
        "username" : $("#inputUsername").val(),
        "password" : $("#inputPassword").val()
    }

    $.ajax({
        url: 'https://teenhelper.herokuapp.com/api/login',
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