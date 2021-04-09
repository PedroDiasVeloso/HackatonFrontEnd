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
            url: 'https://b-fam.herokuapp.com/api',
            type: 'Post',
            data: JSON.stringify(data),
            datatype: "json",
            contentType: "application/json; charset=utf-8",
            error: function (xhr) {
                alert("Error creating user. Try a different Username.");
            },
            success: function (data) {
                console.log(data)
                sessionStorage.setItem("UserID", data);
                window.location.replace("preform.html");
            }
        }); 
    
    })


    $("#loginButton").click(function(event){
        event.preventDefault();
        loadLoginPage();
    })

    function loadLoginPage(){
        window.location.replace("loginPage.html");
    }