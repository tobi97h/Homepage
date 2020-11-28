$(document).ready(function(){

    $("#gitea").hover(function(){
        $("#gitea_link").addClass("hover");
    }, function () {
        $("#gitea_link").removeClass("hover");
    });

    $("#linkedin").hover(function(){
        $("#linkedin_link").addClass("hover");
    }, function () {
        $("#linkedin_link").removeClass("hover");
    });

    $("#wiki").hover(function(){
        $("#wiki_link").addClass("hover");
    }, function () {
        $("#wiki_link").removeClass("hover");
    });

    $("#blog").hover(function(){
        $("#blog_link").addClass("hover");
    }, function () {
        $("#blog_link").removeClass("hover");
    });

});