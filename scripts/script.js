$(function() {

    let body = document.querySelector("body");

    $("#darktheme").on("click", function() {
        body.style.backgroundColor = "#1C1C1C";
        $(".text-color").css("color", "white")
    });

    $("#defaulttheme").on("click", function() {
        body.style.backgroundColor = "#b3b3ff";
        $(".text-color").css("color", "black")
    });

    $("#whitetheme").on("click", function() {
        body.style.backgroundColor = "gray";
        $(".text-color").css("color", "black")
    });


});

function scrollfor(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 1000, function() {
        window.location.hash = id;
    });
}

$(function() {

    $("#Que").on("click", function() {
        scrollfor("#quee");
    });

    $("#Paraq").on("click", function() {
        scrollfor("#paraq");
    });

    $("#Exemp").on("click", function() {
        scrollfor("#exemp");
    });

    $("#Screen").on("click", function() {
        scrollfor("#screen");
    });

    $("#Frame").on("click", function() {
        scrollfor("#frame");
    });

    $("#Refe").on("click", function() {
        scrollfor("#refe");
    });

    $("#Doc").on("click", function() {
        scrollfor("#refe");
    });

    $("#Cont").on("click", function() {
        scrollfor("#refe");
    });

    $("#Midias").on("click", function() {
        scrollfor("#midias");
    });






});