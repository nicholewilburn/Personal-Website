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
