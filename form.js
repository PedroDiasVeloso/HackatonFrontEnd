$("#SubmitButton").click(function(event) {
    event.preventDefault();

    var data = {
        "firstQuestion" : $("#firstChoice").val(),
        "secondQuestion" : $("#secondChoice").val(),
        "thirdQuestion" : $("#thirdChoice").val(),
        "fourthQuestion" : $("#fourthChoice").val()
    }

    var theId  = sessionStorage.getItem('UserID');

    $.ajax({
<<<<<<< HEAD
        url: 'https://teenhelper.herokuapp.com/api/formResponde',
=======
        url: 'https://teenhelper.herokuapp.com/api/formResponse/' + theId,
>>>>>>> 7529decbf169b71514167d46080d9903c9c3f10c
        type: 'Post',
        data: JSON.stringify(data),
        datatype: "json",
        assync: false,
        contentType: "application/json; charset=utf-8",
        error: function (xhr) {
            alert('Error: ' + xhr.statusText);
        },
        success: function (data) {
            console.log(data);
            window.location.replace("userProfile.html");
            
        }
    }); 
})








