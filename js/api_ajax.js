
$.ajax({
    type:"get",
    url: "http://mgcollege.pythonanywhere.com/apiv1/banners", 
    dataType:"json",
    success: function(response){
        console.log(response);
        var i;
        var imgList = '';
        for (i = 0; i < response.length; i++) {
            // console.log(response[i].image);
            imgList +="<li><img src="+response[i].image+"></li>";
        }
        document.getElementById("fullscreen-slider").innerHTML = imgList;
    }
});

setTimeout(function(){
    $("#fullscreen-slider").slider();
}, 3000);  
