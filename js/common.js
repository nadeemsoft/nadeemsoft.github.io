
$(window).on('load',function(){
    $('#loader').fadeOut('slow');
    $('#preloader').fadeOut('slow');
});

// alert('Nadeem you are expert in js....');
 $("#fullscreen-slider").slider();

    $(document).ready(function(){
        $('#lightgallery').lightGallery({
            mode: 'lg-zoom-out-in'
        });
    });


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
    else{

    }
}


// oas-animasion
AOS.init();
// oas-animasion