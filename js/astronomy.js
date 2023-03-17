$(document).ready(
    function () {
        $("#view_button").click(getPictureDetails);
    });

function getPictureDetails() {
    $("#loader").show();

    $.ajax({
        beforeSend: function(){
            $('#loader').css("visibility", "visible");
        },
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "DEMO_KEY",
            date: $("#date").val()
        },
        dataType: "json",
        "success": showPictureInfo,
        "error": noPicture,
        complete: function(){
            $('#loader').css(
                {"visibility": "hidden",
                 "height" : "0",
                 "width" : "0",
                 "top" : "0",
                 "left" : "0",
                 "margin-top" : "0"  }
                );
          }
        
    })
};
function showPictureInfo(data) {
    console.log(data);
    $("#title").html("Title is: " + data.title);
    $("#pic").attr("src", data.url);    
};
function noPicture(error) {
    alert(error.responseText);
};
