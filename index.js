
$("#SubmitButton").click(function(event) {
    event.preventDefault();

    var data = {
        "firstChoice" : $("#firstChoice").val(),
        "secondChoice" : $("#secondChoice").val(),
        "thirdChoice" : $("#thirdChoice").val(),
        "fourthChoice" : $("#fourthChoice").val()
    }

    $.ajax({
        url: 'http://127.0.0.1:5500/Hackaton/index.html',
        type: 'GET',
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