
const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    const widthRatio = Math.floor(window.innerWidth / 300);
    arrow.addEventListener("click", function () {
        if (imageItem - (4 + clickCounter) + (4 - widthRatio) > 0) {
            clickCounter += 1;
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300 }px)`;
        } else {
            clickCounter = 0;
            movieLists[i].style.transform = "translateX(0)";
        }
    });
}); 


// dark mode
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .navbar, .sidebar, .sidebar i,.movie-list-title, .toggle, .toggle-ball, .movie-list-filter select, .arrow");

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active")); 
    // console.log(items);
});