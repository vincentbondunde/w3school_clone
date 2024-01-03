const hiddenDropDownContainer = $('.submenu-container');

const hiddenDropDownContent = $('#tutorials-submenu');
const hiddenDropDownContentTwo = $('#excercises-submenu');
const hiddenDropDownContentThree = $('#certificate-submenu');
const hiddenDropDownContentFour = $('#services-submenu');

function revealContent() {
    // Hides all other submenus
    hiddenDropDownContentTwo.addClass('hidden');
    hiddenDropDownContentThree.addClass('hidden');
    hiddenDropDownContentFour.addClass('hidden');

    let class_names = hiddenDropDownContent.attr("class");

    if(class_names.search("hidden") == -1){
        hiddenDropDownContainer.addClass('hidden');
        hiddenDropDownContent.addClass('hidden');
    }else{
        hiddenDropDownContainer.removeClass('hidden');
        hiddenDropDownContent.removeClass('hidden');
    }


}


function revealContentTwo() {
    // Hides all other submenus
    hiddenDropDownContent.addClass('hidden');
    hiddenDropDownContentThree.addClass('hidden');
    hiddenDropDownContentFour.addClass('hidden');

    // hiddenDropDownContainer.toggle('hidden');
    // hiddenDropDownContentTwo.toggle('hidden');
    
    let class_names = hiddenDropDownContentTwo.attr("class");


    if(class_names.search("hidden") == -1){
        hiddenDropDownContainer.addClass('hidden');
        hiddenDropDownContentTwo.addClass('hidden');
    }else{
        hiddenDropDownContainer.removeClass('hidden');
        hiddenDropDownContentTwo.removeClass('hidden');
    }
}



function revealContentThree() {
    // Hides all other submenus
    hiddenDropDownContentTwo.addClass('hidden');
    hiddenDropDownContent.addClass('hidden');
    hiddenDropDownContentFour.addClass('hidden');

    // hiddenDropDownContainer.toggle('hidden');
    // hiddenDropDownContentThree.toggle('hidden');
    
    let class_names = hiddenDropDownContentThree.attr("class");


    if(class_names.search("hidden") == -1){
        hiddenDropDownContainer.addClass('hidden');
        hiddenDropDownContentThree.addClass('hidden');
    }else{
        hiddenDropDownContainer.removeClass('hidden');
        hiddenDropDownContentThree.removeClass('hidden');
    }
}


function revealContentFour() {
    // Hides all other submenus
    hiddenDropDownContentTwo.addClass('hidden');
    hiddenDropDownContentThree.addClass('hidden');
    hiddenDropDownContent.addClass('hidden');

    // hiddenDropDownContainer.toggle('hidden');
    // hiddenDropDownContentFour.toggle('hidden');
    
    let class_names = hiddenDropDownContentFour.attr("class");
    console.log(class_names, class_names.search("hidden"));


    if(class_names.search("hidden") == -1){
        hiddenDropDownContainer.addClass('hidden');
        hiddenDropDownContentFour.addClass('hidden');
    }else{
        hiddenDropDownContainer.removeClass('hidden');
        hiddenDropDownContentFour.removeClass('hidden');
    }
}





$('#first-dropdown-btn').click(() => revealContent());
$('#second-dropdown-btn').click(() => revealContentTwo());
$('#third-dropdown-btn').click(() => revealContentThree());
$('#forth-dropdown-btn').click(() => revealContentFour());

//mode-switcher-container    dark-btn


// $(document).ready(function () {
//     $(".mode-switcher-container").click(function () {
//         $(".top-nav").css("background-color", "#1d2a35")
//         $(".top-left-nav").css("color", "white")
//         $(".ghost-button-with-icons").css("color", "white")
//         $(".search-input-container").css("background-color", "white")
//     })
// })


function modeSwitch() {
    const topNavBar = $('.top-nav');
    const topLeftNav = $('.top-left-nav');
    const ghostBtn = $('.ghost-button-with-icons');
    const searchInputContainer = $('.search-input-container');
    const modeSwitcherBtn = $('#dark-btn')

    $(topNavBar).toggleClass('darkmode');
    $(topLeftNav).toggleClass('text-color');
    $(ghostBtn).toggleClass('ghost-btn-dark');
    $(searchInputContainer).toggleClass('search-color');
    $(modeSwitcherBtn).toggleClass('text-color');


    $(".black").toggleClass("dark-mode-black-box")
    $("[id='black']").toggleClass("black-editor-boxes")
    $("[id='gray']").toggleClass("gray-inner-boxes")
    $("[id='gray-text']").toggleClass("light-text")
    $("#desktop").toggleClass("desktop-dark")
    $("#web-template").toggleClass("web-templates-dark")
    $(".black-btn").toggleClass("black-btn-dark")


    // $(".black").css("background-color", "blue")
    // $("[id='black']").css("background-color", "#282A35")
    // $("[id='gray']").css("background-color", "#38444d")
    // $("[id='gray-text']").css("color", "#ddd")
}
$('.mode-switcher-container').click(() => modeSwitch());




$('#sub-navbar-caret-right').click(function() {
    // event.preventDefault();
    $('.bottom-nav-container').animate({
      scrollLeft: "+=40px"
    });
  });

  $('#sub-navbar-caret-left').click(function() {
    // event.preventDefault();
    $('.bottom-nav-container').animate({
        scrollLeft: "-=40px"
    });
  });






// for slideshow
// const nextBtn = $('.slideshow-arrow-2');
// const previousBtn = $('.slideshow-arrow');
// const firstSlideshow = $('.first-slideshow');
// const secondSlideshow = $('.second-slideshow');
// const thirdSlideshow = $('.third-slideshow');

//   function slideshowFirst() {
//     // Hides all other slideshow
//     secondSlideshow.addClass('hidden');
//     thirdSlideshow.addClass('hidden');
    

//     let class_names = firstSlideshow.attr("class");
//     console.log(class_names, class_names.search("hidden"));


//     if(class_names.search("hidden") == -1){
//         firstSlideshow.addClass('hidden');
//     }else{
//         firstSlideshow.removeClass('hidden');
//     }
// }

// $('.slideshow-arrow-2').click(() => slideshowFirst());




let slideNum = 1;
showSlides(slideNum);

function plusSlides(n) {
  showSlides(slideNum += n);
}

function currentSlide(n) {
  showSlides(slideNum = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll("#my-slides");
  let dots = document.querySelectorAll(".slideshow-dot")
  if (n > slides.length) {slideNum = 1}    
  if (n < 1) {slideNum = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNum-1].style.display = "block";
  dots[slideNum-1].className += " active";
}


