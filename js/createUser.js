    $("#submit-btn").click(function(event) {
        event.preventDefault();
    
        var data = {
            "username" : $("#inputUsername").val(),
            "firstName" : $("#inputFName").val(),
            "lastName" : $("#inputLName").val(),
            "age" : $("#inputAge").val(),
            "password" : $("#inputPassword").val()
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
            success: function (data) {
                console.log(data)
                sessionStorage.setItem("UserID", data);
                window.location.replace("preform.html");
            }
        }); 
    
    })    