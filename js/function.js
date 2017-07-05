const height = window.height;
const width = window.width;
var isShowing = false;
var check;
var state = 2;
var increase = 1;
var changing;
var idPlayer = 0;
var spin;
var line;

function scrollPage(numPage) {
    check = setInterval(scroll, 11, numPage);
}

function scroll(numPage) {
    scrollBy(0, 10);
    if (pageYOffset >= height * numPage)
        clearScrollPage();
}

function clearScrollPage() {
    clearInterval(check);
}

function showNextSlide() {
    var div11 = document.getElementById("tileDiv1");
    var div12 = document.getElementById("tileDiv2");
    var div2 = document.getElementById("playDiv");
    var div3 = document.getElementById("saleDiv");

    setInterval(showSlideOn, 4000, div11, div2, div3, div12);
}

function showSlideOn(div1, div2, div3, div12) {
    switch (state) {
        case 1:
            div1.style.transform = "translateY(" + 0 + "%)";
            div12.style.transform = "translateY(" + 0 + "%)";
            div2.style.transform = "translateY(" + 0 + "%)";
            div3.style.transform = "translateY(" + 0 + "%)";
            div1.style.opacity = 1;
            div12.style.opacity = 1;
            div2.style.opacity = 0;
            div3.style.opacity = 0;
            break;
        case 2:
            div1.style.transform = "translateY(-" + 100 + "%)";
            div12.style.transform = "translateY(-" + 100 + "%)";
            div2.style.transform = "translateY(-" + 100 + "%)";
            div3.style.transform = "translateY(-" + 100 + "%)";
            div1.style.opacity = 0;
            div12.style.opacity = 0;
            div2.style.opacity = 1;
            div3.style.opacity = 0;
            break;
        case 3:
            div1.style.transform = "translateY(-" + 200 + "%)";
            div12.style.transform = "translateY(-" + 200 + "%)";
            div2.style.transform = "translateY(-" + 200 + "%)";
            div3.style.transform = "translateY(-" + 200 + "%)";
            div1.style.opacity = 0;
            div12.style.opacity = 0;
            div2.style.opacity = 0;
            div3.style.opacity = 1;
            break;

    }
    state += increase;
    if (state == 3 || state == 1) {
        increase = -increase;
    }
}

function showList() {
    var list = document.getElementById("menuMusic");
    var background = document.getElementById("main");
    if (isShowing == false || isShowing == null) {
        background.style.width = "75%";
        background.style.borderBottomLeftRadius = "0%";
        background.style.borderTopLeftRadius = "25% 100%";
        list.style.left = "0%";
        isShowing = true;
    } else {
        background.style.width = "100%";
        background.style.borderBottomLeftRadius = "0%";
        background.style.borderTopLeftRadius = "0%";
        list.style.left = "-25%";
        isShowing = false;
    }
}
/*
function turnOffAnimation() {

    var spin = document.getElementById("list").querySelectorAll(".div_spin");
    for (var i = 0; i < spin.length; i++)
        spin[i].style.animation = "";

    var wings = document.getElementById("list").querySelectorAll(".in_div_spin");
    for (var i = 0; i < wings.length; i++)
        wings[i].style.animation = "";
}
*/
function decorateList() {

    // turnOffAnimation();

    spin = document.getElementById("list").querySelectorAll(".contain_spin");
    line = document.getElementById("list").querySelectorAll(".decoration");

    for (var i = 1; i < 9; i++) {
        var stt = i;
        var div_li = document.getElementById("li" + stt);

        // alert(((8 - i + 1) / 8 * 20 + 80) + "%");
        // li.style.width = ((8 - i + 1) / 8 * 30 + 70) + "%";

        div_li.addEventListener("click", play(stt), false);
        spin[i - 1].style.visibility = "hidden";

    }
    choose();
}

function play(id) {
    return function() {
        unChoose();
        idPlayer = id - 1;
        choose();
        var screen = document.getElementById("main");
        screen.firstElementChild.src = "" + songList[idPlayer].img;
    };
}

function choose() {
    spin[idPlayer].style.visibility = "visible";
    line[idPlayer].style.left = "-100%";
}

function unChoose() {
    spin[idPlayer].style.visibility = "hidden";
    line[idPlayer].style.left = "-50%";
}