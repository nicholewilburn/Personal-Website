//news modal
var newsModal = document.getElementById("news-container");
var newsBtn = document.getElementById("news");
var newsClose = document.getElementById("close-news");
newsBtn.addEventListener('click', drawNews);
newsClose.addEventListener('click', closeNews);

function drawNews() {
    newsModal.style.display = "block";
}
function closeNews () {
    newsModal.style.display = "none";
}