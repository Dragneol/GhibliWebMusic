/**
 * Created by DuongPTH on 6/16/2017.
 */
function Lyrics(start, ended, word) {
    this.started = start;
    this.ended = ended;
    this.word = word;
}
var songList = [{
        id: "li1",
        tile: "Itsumo Nan Do Demo",
        img: "img/1.png",
        mp3: "music/song1.mp3",
        lyric: new Array()
    },
    {
        id: "li2",
        tile: "Yuki no Han",
        img: "img/2.jpg",
        mp3: "music/song2.mp3",
        lyric: new Array()
    },
    {
        id: "li3",
        tile: "Sekai No Yakusoku",
        img: "img/3.png",
        mp3: "music/song3.mp3",
        lyric: new Array()
    },
    {
        id: "li4",
        tile: "Kaze Ni Naru",
        img: "img/4.png",
        mp3: "music/song4.mp3",
        lyric: new Array()
    },
    {
        id: "li5",
        tile: "Kimi O Nose Te",
        img: "img/5.png",
        mp3: "music/song5.mp3",
        lyric: new Array()
    },
    {
        id: "li6",
        tile: "Sayonara no Natsu",
        img: "img/6.png",
        mp3: "music/song6.mp3",
        lyric: new Array()
    },
    {
        id: "li7",
        tile: "Inochi no Namae",
        img: "img/7.png",
        mp3: "music/song7.mp3",
        lyric: new Array()
    },
    {
        id: "li8",
        tile: "Umi No Mieru Machi",
        img: "img/8.png",
        mp3: "music/song8.mp3",
        lyric: new Array()
    },
];
songList[0].lyric.push(new Lyrics(0, 5, ''));
songList[0].lyric.push(new Lyrics(5, 10.7, 'Yondeiru Mune no Dokoka Okude'));
songList[0].lyric.push(new Lyrics(11, 16.8, 'Itsumo Kokoro Odoru Yume wo Mitai'));
songList[0].lyric.push(new Lyrics(17, 22.5, 'Kanashimi wa Kazoekirenai kedo'));
songList[0].lyric.push(new Lyrics(22.5, 28.3, 'Sono Mukou de Kitto Anata ni Aeru'));
songList[0].lyric.push(new Lyrics(28.5, 35.4, 'Kurikaesu Ayamachi no Sonotabi Hito wa'));
songList[0].lyric.push(new Lyrics(35.5, 40.4, 'Tada Aoi Sora no Aosa wo Shiru'));
songList[0].lyric.push(new Lyrics(40.5, 47, 'Hateshinaku Michi wa Tsuzuite Mieru keredo'));
songList[0].lyric.push(new Lyrics(47.1, 51.7, 'Kono Ryoute wa Hikari wo Dakeru'));
songList[0].lyric.push(new Lyrics(52, 59.7, 'Sayonara no Toki no Shizukana Mune'));
songList[0].lyric.push(new Lyrics(60, 65.53, 'Zero ni Naru Karada ga Mimi wo Sumaseru'));
songList[0].lyric.push(new Lyrics(66, 71.57, 'Ikiteiru Fushigi Sinde Iku Fusigi'));
songList[0].lyric.push(new Lyrics(72, 77.8, 'Hana mo Kaze mo Machi mo Minna Onaji'));
songList[0].lyric.push(new Lyrics(77.8, 103.9, ''));
songList[0].lyric.push(new Lyrics(103.8, 109.4, 'Yondeiru Mune no Dokoka Oku de'));
songList[0].lyric.push(new Lyrics(109.5, 114.83, 'Itsumo Nando demo Yume wo Egakou'));
songList[0].lyric.push(new Lyrics(115, 120.4, 'Kanashimi no Kazu wo Iitsukusu yori'));
songList[0].lyric.push(new Lyrics(120.5, 126.36, 'Onaji Kuchibiru de Sotto Utaou'));
songList[0].lyric.push(new Lyrics(126.4, 133.66, 'Tojiteiku Omoide no Sono Naka ni Itsumo'));
songList[0].lyric.push(new Lyrics(133.7, 137.9, 'Wasure takunai Sasayaki wo Kiku'));
songList[0].lyric.push(new Lyrics(138, 143.68, 'Konagona ni Kudakareta Kagami no Ue nimo'));
songList[0].lyric.push(new Lyrics(143.7, 150, 'Atarashii Keshiki ga Utsusareru'));
songList[0].lyric.push(new Lyrics(152, 157.26, 'Hajimari no Asa Shizuka na Mado'));
songList[0].lyric.push(new Lyrics(158, 163, 'Zero ni Naru Karada Mitasarete Yuke'));
songList[0].lyric.push(new Lyrics(163.1, 168.7, 'Umi no Kanata niwa Mou Sagasanai'));
songList[0].lyric.push(new Lyrics(168.8, 174.15, 'Kagayaku Mono wa Itsumo Koko ni'));
songList[0].lyric.push(new Lyrics(174.2, 180.62, 'Watashi no Naka ni Mitsukerareta Kara'));
songList[0].lyric.push(new Lyrics(180.62, Number.MAX_VALUE, ''));

songList[1].lyric.push(new Lyrics(0, 13, ''));
songList[1].lyric.push(new Lyrics(13.1, 19.69, 'nobita kage wo hodou ni narab'));
songList[1].lyric.push(new Lyrics(19.7, 26.64, 'yuuyami no naka wo kimi to aruiteru'));
songList[1].lyric.push(new Lyrics(26.65, 33.4, 'te wo tsunaide itsumademo zutto'));
songList[1].lyric.push(new Lyrics(33.4, 39.36, 'soba ni ireta nara nakechau kurai'));
songList[1].lyric.push(new Lyrics(41.26, 47.44, 'kaze ga tsumetaku natte'));
songList[1].lyric.push(new Lyrics(48.67, 52.67, 'fuyu no nioi ga shita'));
songList[1].lyric.push(new Lyrics(52.7, 59.93, 'sorosoro kono machi ni'));
songList[1].lyric.push(new Lyrics(59.95, 64.27, 'kimi to chikadzukeru kisetsu ga kuru'));
songList[1].lyric.push(new Lyrics(65, 73.68, 'kotoshi, saisho no yuki no hana wo'));
songList[1].lyric.push(new Lyrics(74.2, 77.55, 'futari yorisotte'));
songList[1].lyric.push(new Lyrics(78.6, 81.66, 'nagamete iru kono toki ni'));
songList[1].lyric.push(new Lyrics(82.59, 85.65, 'shiawase ga afuredasu'));
songList[1].lyric.push(new Lyrics(85.7, 90.72, 'amae toka yowasa ja nai'));
songList[1].lyric.push(new Lyrics(91.3, 94.47, 'tada, kimi wo ai shiteru'));
songList[1].lyric.push(new Lyrics(95.14, 100.25, 'kokoro kara sou omotta'));
songList[1].lyric.push(new Lyrics(102.1, 108.29, 'moshi, kimi wo shinatta to shita nara'));
songList[1].lyric.push(new Lyrics(108.98, 114.32, 'hoshi ni natte kimi wo terasu darou'));
songList[1].lyric.push(new Lyrics(116, 121.14, 'egao mo namida ni nureteru yoru mo'));
songList[1].lyric.push(new Lyrics(121.7, 130.95, 'itsumo itsu demo soba ni iru yo'));
songList[1].lyric.push(new Lyrics(131.2, 137.54, 'kotoshi, saisho no yuki no hana wo'));
songList[1].lyric.push(new Lyrics(137.8, 140.73, 'futari yorisotte'));
songList[1].lyric.push(new Lyrics(141.97, 145.05, 'nagamete iru kono toki ni'));
songList[1].lyric.push(new Lyrics(145.74, 148.66, 'shiawase ga afuredasu'));
songList[1].lyric.push(new Lyrics(149.58, 153.96, 'amae toka yowasa ja nai'));
songList[1].lyric.push(new Lyrics(154, 157.03, 'tada, kimi to zutto'));
songList[1].lyric.push(new Lyrics(158.46, 161.51, 'kono mama issho ni itai'));
songList[1].lyric.push(new Lyrics(162, 165.71, 'sunao ni sou omoeru'));
songList[1].lyric.push(new Lyrics(165.92, 170.76, 'kono machi ni furitsumotteku'));
songList[1].lyric.push(new Lyrics(171.3, 174.77, 'masshiro na yuki no hana'));
songList[1].lyric.push(new Lyrics(175.13, 178.2, 'futari no mune ni sotto'));
songList[1].lyric.push(new Lyrics(178.88, 181.58, 'omoide wo egaku yo'));
songList[1].lyric.push(new Lyrics(182.42, 186.93, 'kore kara mo kimi to'));
songList[1].lyric.push(new Lyrics(182.42, 194, 'zutto.....'));
songList[1].lyric.push(new Lyrics(194, Number.MAX_VALUE, '.....'));

songList[2].lyric.push(new Lyrics(0, 25.84, ''));
songList[2].lyric.push(new Lyrics(26.11, 31.47, 'Namida no oku ni'));
songList[2].lyric.push(new Lyrics(32.22, 38.35, 'yuragu hohoemi wa'));
songList[2].lyric.push(new Lyrics(39, 45.57, 'Toki no hajime kara no'));
songList[2].lyric.push(new Lyrics(46.2, 51.39, 'sekai no yakusoku'));
songList[2].lyric.push(new Lyrics(52.63, 59.86, 'Ima wa hitori de mo'));
songList[2].lyric.push(new Lyrics(60.65, 65.87, 'futari no kinou kara'));
songList[2].lyric.push(new Lyrics(66.39, 73.08, 'Kyou wa umare kirameku'));
songList[2].lyric.push(new Lyrics(73.45, 80.51, 'Hajimete atta hi no you ni'));
songList[2].lyric.push(new Lyrics(81.43, 86.37, 'Omoide no uchi ni'));
songList[2].lyric.push(new Lyrics(88.045, 93.93, 'anata wa inai'));
songList[2].lyric.push(new Lyrics(94.40, 100.7, 'Soyokaze to natte'));
songList[2].lyric.push(new Lyrics(101.91, 106.07, 'hoho ni furete kuru'));
songList[2].lyric.push(new Lyrics(140.58, 145.5, 'Komorebi no gogo no'));
songList[2].lyric.push(new Lyrics(147.1, 152.34, 'wakare no ato mo'));
songList[2].lyric.push(new Lyrics(154.01, 159.47, 'Kesshite owaranai'));
songList[2].lyric.push(new Lyrics(161.025, 166.096, 'sekai no yakusoku'));
songList[2].lyric.push(new Lyrics(167.39, 173.84, 'Ima wa hitori de mo'));
songList[2].lyric.push(new Lyrics(174.35, 179.87, 'ashita wa kagirinai'));
songList[2].lyric.push(new Lyrics(180.86, 186.91, 'Anata ga oshiete kureta'));
songList[2].lyric.push(new Lyrics(187.61, 196.077, 'Yoru ni hisomu yasashisa'));
songList[2].lyric.push(new Lyrics(197.29, 202.42, 'Omoide no uchi ni'));
songList[2].lyric.push(new Lyrics(203.595, 208.79, 'anata wa inai'));
songList[2].lyric.push(new Lyrics(210.13, 215.1, 'Seseragi no uta ni'));
songList[2].lyric.push(new Lyrics(216.72, 220.87, 'kono sora no iro ni'));
songList[2].lyric.push(new Lyrics(221.16, 225.55, 'Hana no kaori ni'));
songList[2].lyric.push(new Lyrics(226.49, 233.8, 'itsu made mo ikite....'));
songList[2].lyric.push(new Lyrics(235, Number.MAX_VALUE, ''));

songList[3].lyric.push(new Lyrics(0, 7.95, ''));
songList[3].lyric.push(new Lyrics(7.95, 12.088, 'Wasurete ita me wo tojite'));
songList[3].lyric.push(new Lyrics(12.15, 15.625, 'Tori modose koi no uta'));
songList[3].lyric.push(new Lyrics(16.0, 19.19, 'Aozora ni kakureteiru'));
songList[3].lyric.push(new Lyrics(19.3, 23.16, 'Te wo nobashite mou ichido'));
songList[3].lyric.push(new Lyrics(23.3, 26.52, 'Wasurenaide sugu soba ni'));
songList[3].lyric.push(new Lyrics(26.91, 29.95, 'Boku ga iru itsu no hi mo'));
songList[3].lyric.push(new Lyrics(30.17, 33.93, 'Hoshizora ni nagameteiru'));
songList[3].lyric.push(new Lyrics(34.53, 37.57, 'hitori kiri no yoake mo'));
songList[3].lyric.push(new Lyrics(37.77, 41.50, 'Tatta hitotsu no kokoro'));
songList[3].lyric.push(new Lyrics(42.17, 45.026, 'kanashimi ni kurenaide'));
songList[3].lyric.push(new Lyrics(45.36, 48.53, 'Kimi no tameiki nante'));
songList[3].lyric.push(new Lyrics(48.79, 52.46, 'harukaze ni kaete yaru'));
songList[3].lyric.push(new Lyrics(52.83, 56.39, 'Hi no ataru sakamichi wo'));
songList[3].lyric.push(new Lyrics(56.76, 59.90, 'Jitensha de kake noboru'));
songList[3].lyric.push(new Lyrics(61.16, 64.72, 'Kimi to nakushita omoide'));
songList[3].lyric.push(new Lyrics(64.89, 67.62, 'nosete iku yo'));
songList[3].lyric.push(new Lyrics(67.70, 70.84, 'Rarararara kuchizusamu'));
songList[3].lyric.push(new Lyrics(71.54, 74.83, 'Kuchibiru wo somete iku'));
songList[3].lyric.push(new Lyrics(75.52, 77.73, 'Kimi to mitsuketa'));
songList[3].lyric.push(new Lyrics(77.77, 83.64, 'shiawase hana no you ni'));
songList[3].lyric.push(new Lyrics(84.65, 87.40, 'Wasurete ita mado akete'));
songList[3].lyric.push(new Lyrics(87.86, 91.29, 'hashiri dase koi no uta'));
songList[3].lyric.push(new Lyrics(91.50, 94.95, 'Aozora ni takushiteiru'));
songList[3].lyric.push(new Lyrics(95.14, 98.69, 'Te wo kazashite mou ichido'));
songList[3].lyric.push(new Lyrics(99.14, 102.52, 'Wasurenai yo sugu soba ni'));
songList[3].lyric.push(new Lyrics(102.69, 106.14, 'Kimi ga iru itsu no hi mo'));
songList[3].lyric.push(new Lyrics(106.39, 109.93, 'Hoshizora ni kagayaiteru'));
songList[3].lyric.push(new Lyrics(110.15, 113.49, 'namida yureru ashita mo'));
songList[3].lyric.push(new Lyrics(114.01, 117.20, 'Tatta hitotsu no kotoba'));
songList[3].lyric.push(new Lyrics(117.37, 120.91, 'kono mune ni dakishimete'));
songList[3].lyric.push(new Lyrics(121.18, 124.65, 'Kimi no tame boku ha ima'));
songList[3].lyric.push(new Lyrics(124.77, 128.31, 'harukaze ni fukareteru'));
songList[3].lyric.push(new Lyrics(128.46, 132.05, 'Hi no ataru sakamichi wo'));
songList[3].lyric.push(new Lyrics(132.58, 136.27, 'Jitensha de kake noboru'));
songList[3].lyric.push(new Lyrics(136.52, 138.94, 'Kimi to chikatta'));
songList[3].lyric.push(new Lyrics(139.19, 143.01, 'yakusoku nosete iku yo'));
songList[3].lyric.push(new Lyrics(143.30, 146.89, 'Rarararara kuchizusamu'));
songList[3].lyric.push(new Lyrics(147.14, 150.81, 'Kuchibiru wo somete iku'));
songList[3].lyric.push(new Lyrics(151.22, 155.22, 'Kimi to deaeta shiawase'));
songList[3].lyric.push(new Lyrics(155.22, 157.95, 'inoru you ni'));
songList[3].lyric.push(new Lyrics(178.16, 182.025, 'Hi no ataru sakamichi wo'));
songList[3].lyric.push(new Lyrics(182.55, 186.02, 'Jitensha de kake noboru'));
songList[3].lyric.push(new Lyrics(186.84, 188.53, 'Kimi to chikatta'));
songList[3].lyric.push(new Lyrics(188.53, 192.79, 'yakusoku nosete iku yo'));
songList[3].lyric.push(new Lyrics(193.016, 196.72, 'Rarararara kuchizusamu'));
songList[3].lyric.push(new Lyrics(197.096, 200.024, 'Kuchibiru wo somete iku'));
songList[3].lyric.push(new Lyrics(200.46, 203.39, 'Kimi to deaeta'));
songList[3].lyric.push(new Lyrics(203.42, 207.92, 'shiawase inoru you ni'));
songList[3].lyric.push(new Lyrics(208.20, 210.59, 'Kimi to deaeta'));
songList[3].lyric.push(new Lyrics(211.37, 215.95, 'Shiawase inoru you ni......'));
songList[3].lyric.push(new Lyrics(216, Number.MAX_VALUE, ''));

songList[4].lyric.push(new Lyrics(0, Number.MAX_VALUE, ''));

songList[5].lyric.push(new Lyrics(0, 20, ''));
songList[5].lyric.push(new Lyrics(20.26, 27.76, 'Hikaru umi ni kasumu funewha'));
songList[5].lyric.push(new Lyrics(28.25, 34.77, 'Sayonara no kiteki nokoshimasu'));
songList[5].lyric.push(new Lyrics(35.09, 41.49, 'Yurui saka o orite yukeba'));
songList[5].lyric.push(new Lyrics(42.25, 48.55, 'Natsu iro no kaze ni aeru kashira'));
songList[5].lyric.push(new Lyrics(48.79, 55.125, 'Watashi no ai sore wa merodī'));
songList[5].lyric.push(new Lyrics(55.56, 61.36, 'Takaku hikuku utau no'));
songList[5].lyric.push(new Lyrics(62.30, 68.76, 'Watashi no ai sore wa kamome'));
songList[5].lyric.push(new Lyrics(69.54, 75.22, 'Takaku hikuku tobu no'));
songList[5].lyric.push(new Lyrics(76.19, 82.66, 'Yuuhi no naka yonde mitara'));
songList[5].lyric.push(new Lyrics(83.16, 90, 'Yasashii anata ni aeru kashira'));
songList[5].lyric.push(new Lyrics(103.19, 110.07, 'Dare ka ga hiku piano no oto'));
songList[5].lyric.push(new Lyrics(110.61, 117.20, 'Uminari mitai ni kikoemasu'));
songList[5].lyric.push(new Lyrics(117.73, 124, 'Osoi gogo o yuki kau hito'));
songList[5].lyric.push(new Lyrics(124.1, 130.82, 'Natsu iro no yume o hakobu kashira'));
songList[5].lyric.push(new Lyrics(130.87, 137.46, 'Watashi no ai sore wa daiarī'));
songList[5].lyric.push(new Lyrics(138, 143.36, 'Hibi no pēji tsuzuru no'));
songList[5].lyric.push(new Lyrics(143.50, 151.05, 'Watashi no ai sore wa kobune'));
songList[5].lyric.push(new Lyrics(151.48, 157.58, 'Sora no umi o yuku no'));
songList[5].lyric.push(new Lyrics(158.43, 164.95, 'Yuuhi no naka furikaereba'));
songList[5].lyric.push(new Lyrics(165.49, 172.08, 'Anata wa watashi o sagasu kashira'));
songList[5].lyric.push(new Lyrics(204.26, 211.23, 'Sanpomichi ni yureru kigi wa'));
songList[5].lyric.push(new Lyrics(211.92, 217.88, 'Sayonara no kage o otoshimasu'));
songList[5].lyric.push(new Lyrics(218.52, 224.86, 'Furui chaperu kazami no tori'));
songList[5].lyric.push(new Lyrics(225.39, 231.75, 'Natsu iro no machi wa mieru kashira'));
songList[5].lyric.push(new Lyrics(232.01, 238.52, 'Kinou no ai sore wa namida'));
songList[5].lyric.push(new Lyrics(239.2, 244.3, 'Yagate kawaki kieru no'));
songList[5].lyric.push(new Lyrics(246, 252.316, 'Ashita no ai sore wa rufuran'));
songList[5].lyric.push(new Lyrics(253.07, 258.851, 'Owari no nai kotoba'));
songList[5].lyric.push(new Lyrics(259.57, 265.9, 'Yuuhi no naka meguriaeba'));
songList[5].lyric.push(new Lyrics(266.77, 275.44, 'Anata wa watashi o daku kashira'));
songList[5].lyric.push(new Lyrics(276, Number.MAX_VALUE, ''));

songList[6].lyric.push(new Lyrics(0, 10.78, ''));
songList[6].lyric.push(new Lyrics(11.17, 15.04, 'Aozora ni sen wo hiku'));
songList[6].lyric.push(new Lyrics(15.59, 20.63, 'Hikoukigumo no shirosa wa'));
songList[6].lyric.push(new Lyrics(21.22, 26.46, 'Zutto dokomademo zutto tsuzuiteku'));
songList[6].lyric.push(new Lyrics(26.89, 30.44, 'Asu wo shitte\'ta mitai'));
songList[6].lyric.push(new Lyrics(31.15, 36.31, 'Mune de asaku iki wo shiteta'));
songList[6].lyric.push(new Lyrics(37.065, 47.14, 'Atsui hoo samashita kaze mo oboeteru'));
songList[6].lyric.push(new Lyrics(48.01, 52.76, 'Mirai no mae ni sukumu teashi wa'));
songList[6].lyric.push(new Lyrics(53.41, 57.87, 'Shizuka na koe ni hodokarete'));
songList[6].lyric.push(new Lyrics(58.16, 63.43, 'Sakebitai hodo natsukashii no wa'));
songList[6].lyric.push(new Lyrics(63.67, 68.58, 'Hitotsu no inochi manatsu no hikari'));
songList[6].lyric.push(new Lyrics(68.9, 80.89, 'Anata no kata ni yureteta komorebi'));
songList[6].lyric.push(new Lyrics(88.18, 91.17, 'Tsubureta shiroi booru'));
songList[6].lyric.push(new Lyrics(93.79, 98.06, 'Kaze ga chirashita hanabira'));
songList[6].lyric.push(new Lyrics(98.56, 103.65, 'Futatsu wo ukabete mienai kawa wa'));
songList[6].lyric.push(new Lyrics(103.82, 107.55, 'Utainagara nagareteku'));
songList[6].lyric.push(new Lyrics(108.52, 113.33, 'Himitsu mo uso mo yorokobi mo'));
songList[6].lyric.push(new Lyrics(114.01, 122.76, 'Uchuu wo unda kami-sama no kodomo-tachi'));
songList[6].lyric.push(new Lyrics(124.59, 129.32, 'Mirai no mae ni sukumu kokoro ga'));
songList[6].lyric.push(new Lyrics(130.21, 134.69, 'Itsuka namae wo omoidasu'));
songList[6].lyric.push(new Lyrics(135.14, 140.68, 'Sakebitai hodo itoshii no wa'));
songList[6].lyric.push(new Lyrics(141.19, 145.39, 'Hitotsu no inochi kaeritsuku basho'));
songList[6].lyric.push(new Lyrics(145.59, 159.99, 'Watashi no yubi ni kienai natsu no hi'));
songList[6].lyric.push(new Lyrics(175.15, 180.45, 'Mirai no mae ni sukumu kokoro ga'));
songList[6].lyric.push(new Lyrics(180.63, 185.01, 'Itsuka namae wo omoidasu'));
songList[6].lyric.push(new Lyrics(185.45, 191.18, 'Sakebitai hodo itoshii no wa'));
songList[6].lyric.push(new Lyrics(191.55, 196.14, 'Hitotsu no inochi kaeritsuku basho'));
songList[6].lyric.push(new Lyrics(196.66, 203, 'Watashi no yubi ni kienai.....'));
songList[6].lyric.push(new Lyrics(203, 210, 'Natsu no hi.....'));
songList[6].lyric.push(new Lyrics(210, Number.MAX_VALUE, ''));

songList[7].lyric.push(new Lyrics(0, Number.MAX_VALUE, ''));