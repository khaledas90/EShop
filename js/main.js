"use strict";

document.cookie = "cookieName=cookieValue; SameSite=None; Secure";

// main-category
let catHeading = document.querySelector(".cat-heading");
let mainCategory = document.querySelector(".main-category");
let MainDown = document.querySelector(".MainDown");
catHeading.addEventListener("click", function() {
    mainCategory.classList.toggle("active");
    if (MainDown.classList.contains("fa-angle-right")) {
        MainDown.classList.remove("fa-angle-right");
        MainDown.classList.add("fa-angle-down");
    } else {
        MainDown.classList.remove("fa-angle-down");
        MainDown.classList.add("fa-angle-right");
    }
});

// sub-category
let subCategory = document.querySelector(".sub-category");
let OpenAsideOne = document.querySelector(".OpenAsideOne");
let AngleOne = document.querySelector(".AngleOne");
OpenAsideOne.addEventListener("click", function() {
    subCategory.classList.toggle("active_aside_menu");
    if (AngleOne.classList.contains("fa-angle-down")) {
        AngleOne.classList.remove("fa-angle-down");
        AngleOne.classList.add("fa-angle-right");
    } else {
        AngleOne.classList.remove("fa-angle-right");
        AngleOne.classList.add("fa-angle-down");
    }
});

// main-mega
let mainMega = document.querySelector(".mega-menu");
let OpenAsideTwo = document.querySelector(".OpenAsideTwo");
let AngleTwo = document.querySelector(".AngleTwo");
OpenAsideTwo.addEventListener("click", function() {
    mainMega.classList.toggle("active_Aside_menu");
    if (AngleTwo.classList.contains("fa-angle-down")) {
        AngleTwo.classList.remove("fa-angle-down");
        AngleTwo.classList.add("fa-angle-right");
    } else {
        AngleTwo.classList.remove("fa-angle-right");
        AngleTwo.classList.add("fa-angle-down");
    }
});




// open list link

let drobdownTop = document.querySelector(".drobdownTop");
let LinkShop = document.querySelector(".drobdownEndShop");
let LinkPage = document.querySelector(".drobdownEndPage");
let DrobOpenTop = document.querySelector(".DrobOpenTop");
let DrobOpenShope = document.querySelector(".DrobOpenShope");
let DrobOpenPage = document.querySelector(".DrobOpenPage");
LinkShop.addEventListener("click", () => {
    if (DrobOpenShope.style.display === "none") {
        DrobOpenShope.style.display = "block";
    } else {
        DrobOpenShope.style.display = "none";
    }
});
LinkPage.addEventListener("click", () => {
    if (DrobOpenPage.style.display === "none") {
        DrobOpenPage.style.display = "block";
    } else {
        DrobOpenPage.style.display = "none";
    }
});
drobdownTop.addEventListener("click", () => {
    if (DrobOpenTop.style.display === "none") {
        DrobOpenTop.style.display = "block";
    } else {
        DrobOpenTop.style.display = "none";
    }
});


// open and close video in about page
let play_video = document.querySelector(".play_video");
let close_video = document.querySelector(".close_video");
let videoPayer = document.querySelector(".videoPayer");

play_video.addEventListener("click", () => {
    videoPayer.style.transform = "scale(1)";
    close_video.style.transform = "scale(1)";
});
close_video.addEventListener("click", () => {
    videoPayer.style.transform = "scale(0)";
    close_video.style.transform = "scale(0)";
});





//   countDown

// var countDown = new Date("Jan 5, 2035 15:37:25").getTime();

// var Time = setInterval(function () {
//   var nowDate = new Date().getTime();

//   var currentDownTime = countDown - nowDate;

//   var Days = Math.floor(currentDownTime / (1000 * 60 * 60 * 24));
//   var Hours = Math.floor(
//     (currentDownTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   var Minutes = Math.floor((currentDownTime % (1000 * 60 * 60)) / (1000 * 60));
//   var Second = Math.floor((currentDownTime % (1000 * 60)) / 1000);

//   let d = document.querySelector(".d");
//   let h = document.querySelector(".h");
//   let m = document.querySelector(".m");
//   let s = document.querySelector(".s");

//   d.innerHTML = Days;
//   h.innerHTML = Hours;
//   m.innerHTML = Minutes;
//   s.innerHTML = Second;

//   if (currentDownTime < 0) {
//     clearInterval(countDown);
//     d.innerHTML = "0";
//     h.innerHTML = "0";
//     m.innerHTML = "00";
//     s.innerHTML = "00";
//   }
// }, 1000);