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
        url: 'https://teenhelper.herokuapp.com/api/formResponse/' + theId,
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

var id = 0;
if(sessionStorage.getItem("LoginID") == null){
    id = sessionStorage.getItem("UserID");
}
else{
    id = sessionStorage.getItem("LoginID");
}

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

          

        }
    }); 






