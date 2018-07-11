
//Menu________________________________________________________
$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');

});
//Button menu________________________________________________
$('.navTrigger').click(function(){
    $(this).toggleClass('active');
});

//Block logo_________________________________________________
var $win = $(window),
    $fixed = $(".fixed"),
    limit = 700;

function tgl (state) {
    $fixed.toggleClass("hidden", state);
}
$win.on("scroll", function () {
    var top = $win.scrollTop();
    if (top < limit) {
        tgl(true);
    } else {
        tgl(false);
    }
});

//Slider____________________________________________________
var i = 0;
var images = [];
var time = 3000;

images[0] = "img/aerial-shot-aerial-view-beach-587015.jpg";
images[1] = "img/P1016132.JPG";
images[2] = "img/pexels-photo-307008.jpeg";
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
window.onload= function() { changeImg(); toTop(); };

//Login form_________________________________________________

    var modal = document.getElementById('login');
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

// Validation function_________________________________________

var regName = /^([а-яА-Яa-zA-Z0-9_\-]{4})/;
var regMail = /^([a-zA-Z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/;
var regPass = /^([а-яА-Яa-zA-Z0-9_\-\!\@\+]{6})/;

function Validate() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password_confirm = document.getElementById('password_confirm').value;
    var register = username;

    var name_error = document.getElementById('name_error');
    var email_error = document.getElementById('email_error');
    var password_error = document.getElementById('password_error');

    // validate username______________________________________________________
            if (username.length < 0 || regName.test(username) == false) {
                document.getElementById('username').className = "error";
                document.getElementById('username_div').style.color = "red";
                name_error.textContent = "Username is required";
                return false;
            }
            document.getElementById('username').className ="";
            document.getElementById('username_div').style.color ="";
            document.getElementById('name_error').textContent ="";

        // validate email______________________________________________________
        if (email.length < 0 || regMail.test(email) == false) {
            document.getElementById('email').className = "error";
            document.getElementById('email_div').style.color = "red";
            email_error.textContent = "Email is required";
            return false;
        }
            document.getElementById('email').className ="";
            document.getElementById('email_div').style.color ="";
            document.getElementById('email_error').textContent ="";

        // validate password____________________________________________________
        if (password.length < 0 || regPass.test(password) == false) {
            document.getElementById('password').className = "error";
            document.getElementById('password_div').style.color = "red";
            document.getElementById('password_confirm').className = "error";
            password_error.textContent = "Password is required";
            return false;
        }
            document.getElementById('password').className ="";
            document.getElementById('password_div').style.color ="";
            document.getElementById('password_error').textContent ="";

        // check if the two passwords match______________________________________
        if (password != password_confirm) {
            document.getElementById('password').className = "error";
            document.getElementById('pass_confirm_div').style.color = "red";
            document.getElementById('password_confirm').className = "error";
            password_error.innerHTML = "The two passwords do not match";
            return false;
        }
            document.getElementById('password').className ="";
            document.getElementById('password_confirm').className ="";
            document.getElementById('password_error').textContent ="";

            if (register = true) {
                alert(" Congratulations " + username + " ! you are registered ");
                setData();

                document.getElementById("vform").reset();
                modal.style.display = "none"
            }
    }

function setData (){

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var data = {userName: username, userMail: email, userPass: password};
    var stringData = JSON.stringify(data);
    localStorage.setItem("data", stringData);
}

// Text editor______________________________________________________________________________________
$(document).ready(function(){
    document.getElementById('textEditor').contentWindow.document.designMode="on";
    document.getElementById('textEditor').contentWindow.document.close();
    var edit = document.getElementById("textEditor").contentWindow;
    edit.focus();
    $("#bold").click(function(){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
        }else{
            $(this).addClass("selected");
        }
        boldIt();
    });
    $("#italic").click(function(){
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
        }else{
            $(this).addClass("selected");
        }
        ItalicIt();
    });
    $("#fonts").on('change',function(){
        changeFont($("#fonts").val());
    });
    $("#link").click(function(){
        var urlp=prompt("What is the link:","http://");
        url(urlp);
    });

});
function boldIt(){
    var edit = document.getElementById("textEditor").contentWindow;
    edit.focus();
    edit.document.execCommand("bold", false, "");
    edit.focus();
}
function ItalicIt(){
    var edit = document.getElementById("textEditor").contentWindow;
    edit.focus();
    edit.document.execCommand("italic", false, "");
    edit.focus();
}
function changeFont(font){
    var edit = document.getElementById("textEditor").contentWindow;
    edit.focus();
    edit.document.execCommand("FontName", false, font);
    edit.focus();
}
function url(url){
    var edit = document.getElementById("textEditor").contentWindow;
    edit.focus();
    edit.document.execCommand("Createlink", false, url);
    edit.focus();
}

setInterval(function(){
    var gyt=$("#textEditor").contents().find("body").html().match(/@/g);
    if($("#textEditor").contents().find("body").html().match(/@/g)>=0){}else{
        $("#text").val($("#textEditor").contents().find("body").html());
    }
    $("#text").val($("#textEditor").contents().find("body").html());
},1000);

$('#add').click(function(){window.location = '#review'});


// button scroll___________________________________________
 function toTop(){
    var scrolled;
    var timer;
    document.getElementById('top').onclick = function(){
        scrolled = window.pageYOffset;
          scrollToTop();
    }
    function scrollToTop(){
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 100;
            timer = setTimeout(scrollToTop, 200);
        }
        else {
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}
