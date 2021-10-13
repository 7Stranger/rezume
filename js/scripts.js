$(".mybutton").click(function (event) {
    $(".contacts-text > div").remove();
    $(".contacts-text").append("<div class='animate__animated animate__flash'><a class='contacts-link' href='' target='_blank'></a></div>")
    $(".tel-icon").children("img").attr("src", "./img/icons/tel.png");
    $(".tg-icon").children("img").attr("src", "./img/icons/tg.png");
    $(".viber-icon").children("img").attr("src", "./img/icons/viber.png");
    $(".mail-icon").children("img").attr("src", "./img/icons/mail.png");
    $(".inst-icon").children("img").attr("src", "./img/icons/inst.png");
    $(".fb-icon").children("img").attr("src", "./img/icons/fb.png");

    if ($(this).hasClass("tel-icon")) {
        $(this).children("img").attr("src", "./img/icons/tel-act.png");
        $(".contacts-link").attr("href", "tel:380669491725").text("+38 066 949 17 25");
    }
    if ($(this).hasClass("tg-icon")) {
        $(this).children("img").attr("src", "./img/icons/tg-act.png");
        $(".contacts-link").attr("href", "https://t.me/LordStranger").text("@LordStranger");
    }
    if ($(this).hasClass("viber-icon")) {
        $(this).children("img").attr("src", "./img/icons/viber-act.png");
        $(".contacts-link").attr("href", "viber://chat?number=%2B380669491725").text("написать в viber");
    }
    if ($(this).hasClass("mail-icon")) {
        $(this).children("img").attr("src", "./img/icons/mail-act.png");
        $(".contacts-link").attr("href", "mailto:stanislav.moiseeff@gmail.com").text("stanislav.moiseeff@gmail.com");
    }
    if ($(this).hasClass("inst-icon")) {
        $(this).children("img").attr("src", "./img/icons/inst-act.png");
        $(".contacts-link").attr("href", "https://instagram.com/stanislav_moiseeff").text("@stanislav_moiseeff");
    }
    if ($(this).hasClass("fb-icon")) {
        $(this).children("img").attr("src", "./img/icons/fb-act.png");
        $(".contacts-link").attr("href", "https://facebook.com/stanislav.moiseeff").text("Станислав Моисеев");
    }
});

var currDate = new Date();
var birthDate = new Date(1992, 0, 7);

function ageCalc() {
    var fullYears = currDate.getFullYear() - birthDate.getFullYear();
    if (currDate.getMonth() >= birthDate.getMonth() && currDate.getDate() >= birthDate.getDate()) {
        $("#fullyears").text(fullYears);
    } else {
        $("#fullyears").text(fullYears-1);
    }
    if (currDate.getMonth() === birthDate.getMonth() && currDate.getDate() === birthDate.getDate()) {
        setInterval(happyBDay, 3);
    }
}

var col = 0;
function happyBDay() {
    col += 1;
    if (col === 359) {
        col = 0;
    }
    newColor = "HSL(" + col + ", 80%, 50%)";
    $(".born-date").css('color', newColor);
}

$('#chtheme').on('click', function () {
    if ( $(this).is(':checked') ) {
        $("#themeStyle").attr("href", "css/dark.css");
        $(".myphoto").attr("src", "img/myphoto_dark.jpg");
    } else {
        $("#themeStyle").attr("href", "css/light.css");
        $(".myphoto").attr("src", "img/myphoto.jpg");
    }
})
ageCalc();