const height = screen.height;
const width = screen.width;
var isShowing = false; //menu Song List
var check;
var state = 2; //paralax silde show header
var increase = 1;
var changing;
var idPlayer = 0;
var spin;
var line;
var square;
var playStatus = false;
var error1,error2;

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

    for (var i = 1; i <= songList.length; i++) {
        var stt = i;
        var div_li = document.getElementById("li" + stt);

        // alert(((8 - i + 1) / 8 * 20 + 80) + "%");
        // li.style.width = ((8 - i + 1) / 8 * 30 + 70) + "%";

        div_li.addEventListener("click", play(stt), false);
        spin[i - 1].style.visibility = "hidden";

    }
}

function playASong() {
    playStatus = true;
    var buttonPlay = document.getElementById("iconInPlayButton");
    var buttonPause = document.getElementById("iconInPauseButton");
    buttonPlay.style.visibility = "hidden";
    buttonPause.style.visibility = "visible";
    var screen = document.getElementById("main");
    screen.firstElementChild.src = "" + songList[idPlayer].img;
    var controller = document.getElementById("musicPlayer");
    controller.src = songList[idPlayer].mp3;
    controller.play();
}

function play(id) {
    return function() {
        unChoose();
        idPlayer = id - 1;
        choose();
        playASong();
        // runProcess();
    };
}

function playNext() {
    unChoose();
    if (idPlayer < songList.length - 1) idPlayer++;
    else {
        idPlayer = 0;
        stop();
    }
    // alert(idPlayer);
    choose();
    playASong();
}

function stop() {
    unChoose();
    playStatus = false;
    var buttonPlay = document.getElementById("iconInPlayButton");
    var buttonPause = document.getElementById("iconInPauseButton");
    buttonPlay.style.visibility = "visible";
    buttonPause.style.visibility = "hidden";
    var controller = document.getElementById("musicPlayer");
    controller.pause();
    controller.currentTime = 0;
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
    if (audio.currentTime == audio.duration) playNext();
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

function toggle(x) {
    if (x.classList.contains("fa-toggle-on")) {
        // Remove a class:
        x.classList.toggle("fa-toggle-on", false);
        // Add a class:
        x.classList.toggle("fa-toggle-off", true);
    } else {
        x.classList.toggle("fa-toggle-on", true);
        x.classList.toggle("fa-toggle-off", false);
    }
}

function checkNum(x) {
    // if (event.keyCode >= 48 && event.keyCode <= 57)
    //     alert("NaN");
    return !(x.value < 1 || x.value > 10);

}

function calculate() {
    var sum = document.getElementById("Total Cost");
    var value = document.getElementById("Quantity");
    sum.value = "$" + value.value * 19.99;
}

function submitIt() {

    var checkBox = document.getElementById("checkBox");
    var errorText = document.getElementById("text");
    errorText.innerHTML = "";
    // if (error1 != null) {
        clearTimeout(error1);
        clearTimeout(error2);
        // checkBox.style.opacity = "0";
    // }
    // var regex_name = /(?=.*[a-z])(?=.*[A-Z]).{2,}/;
    var regex_name = /^([a-zA-Z\s])+$/;
    var name = document.getElementsByName("Name");

    if (!regex_name.test(name[0].value)) {
        name[0].focus();
        errorText.innerText = "First Name invalid";
        checkBox.style.opacity = "1";
        checkBox.style.display = "inherit";
        error1 = setTimeout(function() { checkBox.style.opacity = "0";}, 3000);
        error2 = setTimeout(function() {checkBox.style.display = "none";}, 4000);
        return false;
    }

    if (!regex_name.test(name[1].value)) {
        name[1].focus();
        errorText.innerText = "Last Name invalid";
        checkBox.style.opacity = "1";
        checkBox.style.display = "inherit";
        error1 = setTimeout(function() { checkBox.style.opacity = "0";}, 3000);
        error2 = setTimeout(function() {checkBox.style.display = "none";}, 4000);
        return false;
    }

    var regex_email = /^[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+([.][a-zA-Z]+)?$/;
    var mail = document.getElementsByName("Email");

    if (!regex_email.test(mail[0].value)) {
        mail[0].focus();
        errorText.innerText = "Email invalid";
        checkBox.style.opacity = "1";
        checkBox.style.display = "inherit";
        error1 = setTimeout(function() { checkBox.style.opacity = "0";}, 3000);
        error2 = setTimeout(function() {checkBox.style.display = "none";}, 4000);
        return false;
    }

    var regex_phone = /^\d{8,12}$/;
    var phone = document.getElementsByName("Phone");

    if (!regex_phone.test(phone[0].value)) {
        phone[0].focus();
        errorText.innerText = "Phone invalid";
        checkBox.style.opacity = "1";
        checkBox.style.display = "inherit";
        error1 = setTimeout(function() { checkBox.style.opacity = "0";}, 3000);
        error2 = setTimeout(function() {checkBox.style.display = "none";}, 4000);
        return false;
    }

    var value = document.getElementById("Quantity");
    if (!checkNum(value)) {
        value.focus();
        errorText.innerText = "Quantity invalid(1~10 only)";
        checkBox.style.opacity = "1";
        checkBox.style.display = "inherit";
        error1 = setTimeout(function() { checkBox.style.opacity = "0";}, 3000);
        error2 = setTimeout(function() {checkBox.style.display = "none";}, 4000);
        return false;
    }
    document.getElementById("myForm").submit();
    alert("Subcribe Successfully, Refreshing...");
    return true;
}
