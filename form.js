$("#SubmitButton").click(function(event) {
    event.preventDefault();

    var data = {
        "firstQuestion" : $("#firstChoice").val(),
        "secondQuestion" : $("#secondChoice").val(),
        "thirdQuestion" : $("#thirdChoice").val(),
        "fourthQuestion" : $("#fourthChoice").val(),
        "fifthQuestion" : $("#fifthChoice").val(),
        "sixthQuestion" : $("sixthChoice").val(),
        "seventhQuestion" : $("seventhChoice").val(),
        "eightQuestion" : $("eightChoice").val()
    }

    var theId  = sessionStorage.getItem('UserID');

    $.ajax({
        url: 'https://b-fam.herokuapp.com/api/formResponse/' + theId,
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








