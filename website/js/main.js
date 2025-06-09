//navbar
$("body").css("paddingTop", $("nav").innerHeight());

$(function () {
    $(".nav li a").click(function (e) {
        "use strict";
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
            },
            1000
        );
    });
    // Sync Navbar Links With Sections

    $(window).scroll(function () {
        $(".block").each(function () {
            if ($(window).scrollTop() >= $(this).offset().top) {
                var blockId = $(this).attr("id");
                $(".nav a").removeClass("active");
                $('.nav li a[data-scroll="' + blockId + '"]').addClass("active");
            }
        });
    });
});

//slider
let slideIndex;
let slideId;

slideIndex = [1,1,1,1];
/* Class the members of each slideshow group with different CSS classes */
slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4"]
showSlides(1,0);
showSlides(1,1);
showSlides(1,2);
showSlides(1,3);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex[no]-1].style.display = "block";
}





