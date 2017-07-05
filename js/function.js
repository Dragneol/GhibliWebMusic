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
var square;
var playStatus = false;

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

    // spin = document.getElementById("list").querySelectorAll(".contain_spin");
    spin = document.getElementsByClassName("contain_spin");
    // line = document.getElementById("list").querySelectorAll(".decoration");
    line = document.getElementsByClassName("decoration");
    square = document.getElementsByClassName("square");

    for (var i = 1; i < 9; i++) {
        var stt = i;
        var div_li = document.getElementById("li" + stt);

        // alert(((8 - i + 1) / 8 * 20 + 80) + "%");
        // li.style.width = ((8 - i + 1) / 8 * 30 + 70) + "%";

        div_li.addEventListener("click", play(stt), false);
        spin[i - 1].style.visibility = "hidden";

    }
}

function play(id) {
    return function() {
        unChoose();
        idPlayer = id - 1;
        choose();
        var screen = document.getElementById("main");
        screen.firstElementChild.src = "" + songList[idPlayer].img;
        var controller = document.getElementById("musicPlayer");
        controller.src = songList[idPlayer].mp3;
        controller.play();
        playStatus = true;
        var buttonPlay = document.getElementById("iconInPlayButton");
        var buttonPause = document.getElementById("iconInPauseButton");
        buttonPlay.style.visibility = "hidden";
        buttonPause.style.visibility = "visible";
        // runProcess();
    };
}

function choose() {
    spin[idPlayer].style.visibility = "visible";
    line[idPlayer].style.left = "-100%";
    square[idPlayer].style.opacity = "0";
    chooseEffect(idPlayer + 1, true);
}

function unChoose() {
    spin[idPlayer].style.visibility = "hidden";
    line[idPlayer].style.left = "-50%";
    square[idPlayer].style.opacity = "1";
    chooseEffect(idPlayer + 1, false);
}

function runProcess() {
    var buttonPlay = document.getElementById("iconInPlayButton");
    var buttonPause = document.getElementById("iconInPauseButton");
    var audio = document.getElementById("musicPlayer");
    if (!playStatus) {
        playStatus = true;
        choose();
        buttonPlay.style.visibility = "hidden";
        buttonPause.style.visibility = "visible";
        audio.play();
    } else {
        playStatus = false;
        spin[idPlayer].style.visibility = "hidden";
        square[idPlayer].style.opacity = "1";
        buttonPause.style.visibility = "hidden";
        buttonPlay.style.visibility = "visible";
        audio.pause();
    }
}

function updateProgress() {
    var audio = document.getElementById("musicPlayer");
    document.getElementById("progress").style.width = (audio.currentTime / audio.duration * 100) + "%";
}

function changeProgress(event) {
    var playBar = document.getElementById("playBar");
    var x = event.clientX - playBar.offsetLeft;
    var audio = document.getElementById("musicPlayer");
    audio.currentTime = x / playBar.offsetWidth * audio.duration;
}

function showObject(tagId, startX, startY, endX, endY, isShow, isBlend) {
    var tag = document.getElementById(tagId);
    if (isShow) {
        tag.style.left = endX + "%";
        tag.style.top = endY + "%";
        tag.style.opacity = 1;
        if (isBlend)
            document.getElementById("blend").style.opacity = 0.5;
    } else {
        tag.style.left = startX + "%";
        tag.style.top = startY + "%";
        tag.style.opacity = 0;
        if (isBlend)
            document.getElementById("blend").style.opacity = 0;
    }
}

function chooseEffect(idPlay, isShow) {
    switch (idPlay) {
        case 1:
            showObject("objimg1-1", 0, 0, 50, 0, isShow, true);
            break;
        case 2:
            showObject("objimg2-2", 0, 0, 30, 0, isShow, true);
            break;
        case 3:
            showObject("objimg3-3", 30, 0, 60, 0, isShow, false);
            break;
        case 5:
            showObject("objimg5-5", 0, -10, 0, 30, isShow, false);
            break;
        case 6:
            showObject("objimg6-6", 0, 0, -15, -40, isShow, false);
            break;
        case 7:
            showObject("objimg7-7", 0, 0, -50, 0, isShow, false);
            break;
        case 8:
            showObject("objimg8-1", 0, 0, 10, 10, isShow, true);
            showObject("objimg8-2", 0, 0, 10, 5, isShow, true);
            break;
    }
}