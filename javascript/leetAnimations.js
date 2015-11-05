/*
    File created on 21/10/2015 04:30 PM in Microsoft Visual Studio Community 2015
    Author: Jacob J
    Description: eyecandy
    Name: leetAnimations.js
*/
//***************************************************************************************************************************************************************************************
//_______________________________________________________________________________________________________________________________________________________________________________________

$(document).ready(function () {
    //_______________________________________________________________________________________________________________________________________________________________________________________
    //Name: transitioner
    //Task: smooth scrolling when navigating to anchors; stop animations, calculate target distance by left/top, set scrollspeed to 1.2s
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    $("#topLinks a").bind("click",function(event){
        event.preventDefault();
        var target = $(this).attr("href");
        $("html, body").stop().animate({
            scrollLeft: $(target).offset().left, scrollTop: $(target).offset().top
        }, 1200);
    });

    //_______________________________________________________________________________________________________________________________________________________________________________________
    //Name: imageswitch
    //Task: switch images on hover to simulate animation
    //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    var imageArray = new Array();
    imageArray[0] = new Image();
    imageArray[1] = new Image();
    imageArray[2] = new Image();
    imageArray[0] = document.getElementById("portfolioCat");
    imageArray[1] = document.getElementById("contactGoogleP");
    imageArray[2] = document.getElementById("contactLinkedIN");

    var cat = new Image();
    var googlePlus = new Image();
    var linkedIn = new Image();

    imageArray[0].addEventListener("mouseenter", function () {
        cat.src = "../img/hoverGithubCat.png";
        imageArray[0].setAttribute("src", cat.src);    
    }, false);
    imageArray[1].addEventListener("mouseenter", function () {
        googlePlus.src = "../img/hoverGooglepluz.png";
        imageArray[1].setAttribute("src", googlePlus.src);
    }, false);
    imageArray[2].addEventListener("mouseenter", function () {
        linkedIn.src = "../img/hoverLinkdin2.png";
        imageArray[2].setAttribute("src", linkedIn.src);
    }, false);

    imageArray[0].addEventListener("mouseout", function () {
        cat.src = "../img/githubCat.png";
        imageArray[0].setAttribute("src", cat.src);
    }, false);
    imageArray[1].addEventListener("mouseout", function () {
        googlePlus.src = "../img/googlepluz.png";
        imageArray[1].setAttribute("src", googlePlus.src);
    }, false);
    imageArray[2].addEventListener("mouseout", function () {
        linkedIn.src = "../img/linkdin2.png";
        imageArray[2].setAttribute("src", linkedIn.src);
    }, false);
});

//_______________________________________________________________________________________________________________________________________________________________________________________
//***************************************************************************************************************************************************************************************
