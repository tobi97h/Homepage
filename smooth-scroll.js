let about = document.getElementById("about");
let tech = document.getElementById("tech");
let stats = document.getElementById("stats");

$(".about-btn").click(function(){
    let distance = -(about.offsetTop + tech.offsetTop + stats.offsetTop);
    scrollBy({top: distance, behavior: "smooth"});
    $(".mobile-navbar-overlay").removeClass("open");
});

$(".tech-btn").click(function(){
    let distance = about.offsetTop + tech.offsetTop;
    scrollBy({top: distance, behavior: "smooth"});
    $(".mobile-navbar-overlay").removeClass("open");
});

$(".stats-btn").click(function(){
    let distance = about.offsetTop + tech.offsetTop + stats.offsetTop;
    scrollBy({top: distance, behavior: "smooth"});
    $(".mobile-navbar-overlay").removeClass("open");
});