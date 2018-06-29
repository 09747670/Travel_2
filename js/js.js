
//Menu
$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');

});
//Button menu
$('.navTrigger').click(function(){
    $(this).toggleClass('active');
});


//Slider
var i = 0;
var images = [];
var time = 3000;

images[0] = "img/aerial-shot-aerial-view-beach-587015.jpg";
images[1] = "img/P1016132.JPG";
images[2] = "img/stefan-stefancik-545709-unsplash.jpg";
images[3] = "img/P1010057.JPG";
images[4] = "img/pexels-photo-248797.jpeg";
images[5] = "img/pexels-photo-338515.jpeg";

function changeImg(){
    document.slide.src = images[i];
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }


    setTimeout("changeImg()", time);

}


window.onload=changeImg;


