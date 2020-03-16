
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

function openEnquiryPopup(){
    var firstNo = 30;
    var secondNo = 5;
    if(firstNo > secondNo){
        alert("first brother is elder than 2nd brother");
    }
    else{
        alert("2nd brother is elder than 1st brother");
    }
    // alert(firstNo / secondNo);
}
// oas-animasion
AOS.init();
// oas-animasion