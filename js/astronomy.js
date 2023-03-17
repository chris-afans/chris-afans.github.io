$(document).ready(
    function () {
        $("#view_button").click(getPictureDetails);
    });

function getPictureDetails() {
    $.ajax({
        url: "https://api.nasa.gov/planetary/apod",
        type: "GET",
        data: {
            api_key: "DEMO_KEY",
            date: $("#date").val()
        },
        dataType: "json",
        "success": showPictureInfo,
        "error": noPicture
    });
};
function showPictureInfo(data) {
    console.log(data);
    $("#title").html("Title is: " + data.title);
    $("#pic").attr("src", data.url);    
};
function noPicture(error) {
    alert(error.responseText);
};
