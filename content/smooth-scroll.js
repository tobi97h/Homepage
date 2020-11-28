let about = document.getElementById("about");
let tech = document.getElementById("tech");
let stats = document.getElementById("stats");

$(".about-btn").click(function(){
    let distance = 0;
    window.scrollTo({top: distance, behavior: "smooth"});
    $(".mobile-navbar-overlay").removeClass("open");
});

$(".tech-btn").click(function(){
    let distance = tech.offsetTop - 70;
    window.scrollTo({top: distance, behavior: "smooth"});
    $(".mobile-navbar-overlay").removeClass("open");
});

$(".stats-btn").click(function(){
    let distance = stats.offsetTop - 70;
    window.scrollTo({top: distance, behavior: "smooth"});
    $(".mobile-navbar-overlay").removeClass("open");
});