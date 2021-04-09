$("#SubmitButton").click(function(event) {
    event.preventDefault();

    var data = {
        "firstQuestion" : $("#firstChoice").val(),
        "secondQuestion" : $("#secondChoice").val(),
        "thirdQuestion" : $("#thirdChoice").val(),
        "fourthQuestion" : $("#fourthChoice").val()
    }

    $.ajax({
        url: 'https://teenhelper.herokuapp.com/api/formResponde',
        type: 'Post',
        data: JSON.stringify(data),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        error: function (xhr) {
            alert('Error: ' + xhr.statusText);
        },
        success: function () {
            console.log(data);
        }
    }); 
})