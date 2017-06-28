/**
 * Created by DuongPTH on 6/3/2017.
 */
var playStatus = true;
var idPlayer = 0;
function generateSong() {
    var div_list = document.getElementById("musicList");
    for (var i = 0; i < songList.length; i++) {
        var tag = document.createElement("div");

        var name = document.createElement("p");
        name.textContent = songList[i].tile;
        tag.appendChild(name);

        tag.className = "song";
        tag.style.backgroundImage = "url(" + songList[i].img + ")";

        var playButton = document.createElement('i');
        playButton.className = "fa fa-youtube-play";
        playButton.id = songList[i].id;
        tag.appendChild(playButton);

        playButton.addEventListener('click', play(playButton.id));
        div_list.appendChild(tag);

    }
}

function play(id) {
    return function () {
        idPlayer = id;
        getLink();
    };
}

function playNext() {
    if (idPlayer == songList.length - 1) idPlayer = 0;
    else idPlayer++;
    getLink();
}

function playPrev() {
    if (idPlayer == 0) idPlayer = songList.length - 1;
    else idPlayer--;
    getLink();
}

function getLink() {
    var mp3File = songList[idPlayer].mp3;
    var jpgFile = songList[idPlayer].img;
    var screen = document.getElementById('para2');
    screen.style.backgroundImage = 'url("' + jpgFile + '")';
    changeMusic(mp3File);
}

function changeMusic(url) {
    var controller = document.getElementById("musicPlayer");
    var button = document.getElementById("playButton");
    controller.src = url;
    playStatus = true;
    push();
    controller.onended = function () {
        playNext();
    }
}

function push() {
    var controller = document.getElementById("musicPlayer");
    var button = document.getElementById("playButton");
    if (playStatus) {
        button.className = "fa fa-pause-circle-o";
        playStatus = false;
        controller.play();
    }
    else {
        button.className = "fa fa-play-circle-o";
        playStatus = true;
        controller.pause();
    }
}
