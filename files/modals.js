//news modal
var newsModal = document.getElementById("news-container");
var newsBtn = document.getElementById("news");
var newsClose = document.getElementById("close-news");
newsBtn.addEventListener('click', drawNews);
newsClose.addEventListener('click', closeNews);

function drawNews() {
    newsModal.style.display = "block";
    newsClose.style.display = "block";
}
function closeNews () {
    newsModal.style.display = "none";
    newsClose.style.display = "none";
}

//about me modal
var aboutMeModal = document.getElementById("aboutme-container");
var aboutMeCntrl = document.getElementById("aboutme-buttons");
var aboutMeBtn = document.getElementById("about");
var aboutMeClose = document.getElementById("close-aboutme");
aboutMeBtn.addEventListener('click', drawTV);
aboutMeClose.addEventListener('click', closeTV);

function drawTV() {
    aboutMeModal.style.display = "block";
    aboutMeCntrl.style.display = "block";
}

function closeTV() {
    aboutMeModal.style.display = "none";
    aboutMeCntrl.style.display = "none";
}

//tv buttons
var frame01 = document.getElementById("aboutme-FRAME-1");
var frame02 = document.getElementById("aboutme-FRAME-2");
var frame03 = document.getElementById("aboutme-FRAME-3");

var tvBtn01 = document.getElementById("tvbtn-01");
var tvBtn02 = document.getElementById("tvbtn-02");
var tvBtn03 = document.getElementById("tvbtn-03");
tvBtn01.addEventListener('click', button01);
tvBtn02.addEventListener('click', button02);
tvBtn03.addEventListener('click', button03);

function button01() {
    frame01.style.display = "block";
    frame02.style.display = "none";
    frame03.style.display = "none";
}
function button02() {
    frame01.style.display = "none";
    frame02.style.display = "block";
    frame03.style.display = "none";
}
function button03() {
    frame01.style.display = "none";
    frame02.style.display = "none";
    frame03.style.display = "block";
}

//phone modal
var phoneModal = document.getElementById("phone-container");
var phoneBtn = document.getElementById("contact");
var phoneClose = document.getElementById("close-phone");
phoneBtn.addEventListener('click', drawPhone);
phoneClose.addEventListener('click', closePhone);

function drawPhone() {
    phoneModal.style.display = "block";
}

function closePhone() {
    phoneModal.style.display = "none";
}

//phone buttons
var phoneBtn01 = document.getElementById("phone-01");
var phoneBtn02 = document.getElementById("phone-02");
var phoneBtn03 = document.getElementById("phone-03");
var phoneBtn04 = document.getElementById("phone-04");
var phoneBtn05 = document.getElementById("phone-05");
var phoneBtn06 = document.getElementById("phone-06");
var phoneBtn07 = document.getElementById("phone-07");
var phoneBtn08 = document.getElementById("phone-08");
var phoneBtn09 = document.getElementById("phone-09");
var phoneBtnSTAR = document.getElementById("phone-str");
var phoneBtn0 = document.getElementById("phone-0");
var phoneBtnHASH = document.getElementById("phone-hsh");

var phoneFrame01 = document.getElementById("phone-frame-01");
var phoneFrame02 = document.getElementById("phone-frame-02");
var phoneFrame03 = document.getElementById("phone-frame-03");
var phoneFrame04 = document.getElementById("phone-frame-04");
var phoneFrame05 = document.getElementById("phone-frame-05");
var phoneFrame06 = document.getElementById("phone-frame-06");
var phoneFrame07 = document.getElementById("phone-frame-07");
var phoneFrame08 = document.getElementById("phone-frame-08");
var phoneFrame09 = document.getElementById("phone-frame-09");
var phoneFrameSTAR = document.getElementById("phone-frame-str");
var phoneFrame0 = document.getElementById("phone-frame-0");
var phoneFrameHASH = document.getElementById("phone-frame-hsh");

phoneBtn01.addEventListener('click', decideScreen1);
phoneBtn02.addEventListener('click', decideScreen2);
phoneBtn03.addEventListener('click', decideScreen3);
phoneBtn04.addEventListener('click', decideScreen4);
phoneBtn05.addEventListener('click', decideScreen5);
phoneBtn06.addEventListener('click', decideScreen6);
phoneBtn07.addEventListener('click', decideScreen7);
phoneBtn08.addEventListener('click', decideScreen8);
phoneBtn09.addEventListener('click', decideScreen9);
phoneBtnSTAR.addEventListener('click', decideScreenSTAR);
phoneBtn0.addEventListener('click', decideScreen0);
phoneBtnHASH.addEventListener('click', decideScreenHASH);

function decideScreen1() {
        phoneFrame01.style.display = "block";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen2() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "block";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen3() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "block";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen4() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "block";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen5() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "block";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen6() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "block";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen7() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "block";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen8() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "block";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen9() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "block";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreenSTAR() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "block";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "none";
    }

    function decideScreen0() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "block";
        phoneFrameHASH.style.display = "none";
    }

    
    function decideScreenHASH() {
        phoneFrame01.style.display = "none";
        phoneFrame02.style.display = "none";
        phoneFrame03.style.display = "none";
        phoneFrame04.style.display = "none";
        phoneFrame05.style.display = "none";
        phoneFrame06.style.display = "none";
        phoneFrame07.style.display = "none";
        phoneFrame08.style.display = "none";
        phoneFrame09.style.display = "none";
        phoneFrameSTAR.style.display = "none";
        phoneFrame0.style.display = "none";
        phoneFrameHASH.style.display = "block";
    }
