/**
 * Created by DuongPTH on 7/9/2017.
 */
/**
 * Created by Decen on 29/12/2016.
 */
var playMusic = false;
var id1, id2, id3;
var listWord = new Array();
var pos = 0;
var isLoop = false;
var isSetWord = false;
function Lyrics(start, ended, word) {
    this.started = start;
    this.ended = ended;
    this.word = word;
}
listWord.push(new Lyrics(0,3, 'Alan Walker<br>Mash up'));
listWord.push(new Lyrics(3,6, 'cover by<br>j.fla'));
listWord.push(new Lyrics(6,11, 'Sing me to sleep<br>Alone'));
listWord.push(new Lyrics(11,12.06, 'Wait a second'));
listWord.push(new Lyrics(12.06,13.1, 'let me catch'));
listWord.push(new Lyrics(13.1,16.03, 'my breath'));
listWord.push(new Lyrics(16.03,17, 'remind me'));
listWord.push(new Lyrics(17, 18.04, 'how i feels'));
listWord.push(new Lyrics(18.04, 20.5,  'to hear<br>yours voice'));
listWord.push(new Lyrics(20.5, 21.5,  ''));
listWord.push(new Lyrics(21.5, 22.5,  'your lips are'));
listWord.push(new Lyrics(22.5, 23,  'moving'));
listWord.push(new Lyrics(23, 24,  'i can\'t hear'));
listWord.push(new Lyrics(24, 25.21,  'a thing'));
listWord.push(new Lyrics(25.21, 27, ''));
listWord.push(new Lyrics(27, 28.11, 'living life'));
listWord.push(new Lyrics(28.11, 29,  'as if'));
listWord.push(new Lyrics(29, 31.10,  'we had<br> a choice'));
listWord.push(new Lyrics(31.3, 32.8, ''));
listWord.push(new Lyrics(32.8, 34,  'anywhere'));
listWord.push(new Lyrics(34, 35.3,  'anytime'));
listWord.push(new Lyrics(35.3, 36.7,  'I would do'));
listWord.push(new Lyrics(36.7, 38,  'Anything'));
listWord.push(new Lyrics(38, 41,  'For you'));
listWord.push(new Lyrics(41, 43.3,  'Anything<br>For you'));
listWord.push(new Lyrics(43.3, 45,  'Yesterday'));
listWord.push(new Lyrics(45, 46.5,  'Got away'));
listWord.push(new Lyrics(46.5, 47.7,  'Melodies'));
listWord.push(new Lyrics(47.7, 48.7,  'Stuck inside'));
listWord.push(new Lyrics(48.7, 51,  'your head'));
listWord.push(new Lyrics(51, 54.2,  'a song in<br> every breath'));
listWord.push(new Lyrics(54.2, 55.8,  'sing'));
listWord.push(new Lyrics(55.8, 57,  'me'));
listWord.push(new Lyrics(57, 58,  'to sleep'));
listWord.push(new Lyrics(58, 59.5,  'now'));
listWord.push(new Lyrics(59.5, 61,  'sing'));
listWord.push(new Lyrics(61, 62.5,  'me'));
listWord.push(new Lyrics(62.5, 64.5,  'to sleep'));
listWord.push(new Lyrics(64.5, 65.5,  'oh, won\'t you'));
listWord.push(new Lyrics(65.5, 67,  'sing'));
listWord.push(new Lyrics(67, 68,  'me'));
listWord.push(new Lyrics(68, 69,  'to sleep'));
listWord.push(new Lyrics(69, 70.5,  'now'));
listWord.push(new Lyrics(70.5, 72,  'sing'));
listWord.push(new Lyrics(72, 73,  'me'));
listWord.push(new Lyrics(73, 75,  'to sleep'));
listWord.push(new Lyrics(75, 101,  ''));
listWord.push(new Lyrics(101, 102.3,  'lost'));
listWord.push(new Lyrics(102.3, 103.3,  'in'));
listWord.push(new Lyrics(103.3, 105,  'your'));
listWord.push(new Lyrics(105, 108,  'mind'));
listWord.push(new Lyrics(108, 111,  'I wanna<br>know'));
listWord.push(new Lyrics(111, 114,  'Am i<br>loosing'));
listWord.push(new Lyrics(114, 119,  'my mind'));
listWord.push(new Lyrics(119, 121,  'never ler<br>me go'));
listWord.push(new Lyrics(121, 122,  'if'));
listWord.push(new Lyrics(122, 123,  'this night'));
listWord.push(new Lyrics(123, 125,  'is not<br>forever'));
listWord.push(new Lyrics(125, 125.8,  'at least'));
listWord.push(new Lyrics(125.8, 126.5,  'we are'));
listWord.push(new Lyrics(126.5, 127.5,  'together'));
listWord.push(new Lyrics(127.5, 128.8,  'I know'));
listWord.push(new Lyrics(128.8, 130.1,  'I\'m not<br>alone'));
listWord.push(new Lyrics(130.1, 131.1,  'I know'));
listWord.push(new Lyrics(131.1, 133.1,  'I\'m not<br>alone'));
listWord.push(new Lyrics(133.1, 134.5,  'anywhere'));
listWord.push(new Lyrics(134.5, 136,  'whenever'));
listWord.push(new Lyrics(136, 137.5,  'apart, but<br>still'));
listWord.push(new Lyrics(137.5, 138.5,  'together'));
listWord.push(new Lyrics(138.5, 139.5,  'I know'));
listWord.push(new Lyrics(139.5, 141.5,  'I\'m not<br>alone'));
listWord.push(new Lyrics(141.5, 142.6,  'I know'));
listWord.push(new Lyrics(142.6, 143.6,  'I\'m not'));
listWord.push(new Lyrics(143.6, 145,  'alone'));

listWord.push(new Lyrics(0,Number.MAX_VALUE,''));



function mouseMove(event) {
    var x = event.clientX;
    document.getElementById("box").style.backgroundPosition = (-x / innerWidth) * 100 + "px center";
    document.getElementById("big").style.left = -(x - innerWidth / 2) * 300 / innerWidth + "px";
}
function playMyMusic() {
    clearTimeout(id1);
    clearTimeout(id2);
    if (playMusic == false) {
        id1 = setTimeout('playControl()', 0);
        id2 = setTimeout('playBar(' + innerWidth/2 + ')',500);
        // id3 = setInterval('playButton()', 10);
    } else {
        id1 = setTimeout('playBar(0)', 0);
        id2 = setTimeout('playControl()', 500);
    }
}

function playControl() {
    var pl = document.getElementById('play');
    var conpl = document.getElementById('conPlay');
    if (playMusic == false) {
        document.getElementById('music').play();
        pl.className = 'fa fa-pause-circle-o';
        pl.style.fontSize = '150px';
        conpl.style.top = '80%';
        playMusic = true;
    } else {
        document.getElementById('music').pause();
        pl.className = 'fa fa-play-circle-o';
        pl.style.fontSize = '300px';
        conpl.style.top = '50%';
        playMusic = false;
        document.getElementById('lyrics').innerHTML = '';
    }
}

function playBar(barLenght) {
    var bar = document.getElementById('playBar');
    bar.style.width = '' + barLenght + 'px';
}

function playButton() {
    var music = document.getElementById('music');
    var time = music.currentTime;
    var ly = listWord[pos];
    document.getElementById('playButton').style.width = (time/music.duration)*100 + '%';
    if (playMusic == false) {
        return;
    }
    if (time < ly.ended - 0.1) {
        lyricsControl();
    } else {
        ++pos;
        isSetWord = false;
        lyricsControl();
    }
}

function lyricsControl() {
    if (isSetWord) {
        return;
    }
    var ly = listWord[pos];
    var time = music.currentTime;

    document.getElementById('lyrics').innerHTML = '<div id="word">' + listWord[pos].word + '</div>';
    isSetWord = true;
    var w = document.getElementById('word');
    var dur = (ly.ended - ly.started);
    // lyrics.style.fontSize = 500 - (ly.ended - time)/dur*50 + '%';
    // w.style.transition = 'opacity ' + dur + 's';
    // w.className = 'endWord';
    w.style.animationDuration = dur + 0.5 + 's';
}

function reset() {
    pos = 0;
    if (isLoop) {
        document.getElementById('music').currentTime = 0;
    } else {
        playMyMusic();
    }
}

function playClick(event) {
    var bar = document.getElementById('playBar');
    var big = document.getElementById('big');
    var music = document.getElementById('music');
    var x = event.pageX - (bar.offsetLeft + bar.offsetParent.offsetLeft + big.offsetLeft - bar.offsetParent.offsetWidth/2);
    music.currentTime = (x/bar.offsetWidth)*music.duration;
    for (var i = 0; i < listWord.length; i++) {
        var tmp = listWord[i];
        if (tmp.started <= music.currentTime && music.currentTime < tmp.ended) {
            pos = i;
            isSetWord = false;
            return;
        }
    }
}
