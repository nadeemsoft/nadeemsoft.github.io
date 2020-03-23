
$(window).on('load',function(){
    $('#loader').fadeOut('slow');
    $('#preloader').fadeOut('slow');
});

// alert('Nadeem you are expert in js....');
 
    $(document).ready(function(){
        $('#lightgallery').lightGallery({
            mode: 'lg-zoom-out-in'
        });
    });


function submitLoginForm() {
    var emailId = document.getElementById("emailId").value;
    var password = document.getElementById("password").value;
    alert("form Submitted.." + emailId);
}

function menuOpenClose() {
    var menu = document.getElementById("topmenu");
    if (menu.className === "topmenu") {
        menu.className += " responsivemenu";
        document.getElementById("icon").innerHTML = "<i class='fa fa-times'></i>";
    } else {
        menu.className = "topmenu";
        document.getElementById("icon").innerHTML = "<i class='fa fa-bars'></i>";
    }
}

function openLoginPopup(popupValue){
    console.log(popupValue);
    var loginPopupId = document.getElementById("loginPopup");
    if(popupValue == "open"){
        loginPopupId.style.cssText = "display:block;";
    }
    else if(popupValue == "close"){
        loginPopupId.style.display = "none";
    }
}
function openEnquiryPopup(popupValue){
    console.log(popupValue);
    var enquiryPopupId = document.getElementById("enquiryPopup");
    if(popupValue == "open"){
        enquiryPopupId.style.cssText = "display:block;";
    }
    else if(popupValue == "close"){
        enquiryPopupId.style.display = "none";
    }
}
// oas-animasion
AOS.init();
// oas-animasion

function scrollToTop() { 
    $(window).scrollTop(0); 
} 