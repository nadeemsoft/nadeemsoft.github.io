//banner ajax call
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
        setTimeout(function(){
            $("#fullscreen-slider").slider();
        }, 1000);
    }
});
//banner ajax call

$.ajax({
    type:"get",
    url:"http://mgcollege.pythonanywhere.com/apiv1/organisation_details/",
    dataType:"json",
    success:function(response){
    console.log(response[0].logo);
    document.getElementById("logo").src= response[0].logo;
    document.getElementById("orgName").innerHTML = response[0].organisation_name;
    document.getElementById("contactNo").innerHTML = response[0].contact_no;
    document.getElementById("emailIdTop").innerHTML = response[0].email_id;
    document.getElementById("facebookUrl").href = response[0].facebook_link;
    document.getElementById("twitterUrl").href = response[0].twitter_link;
    document.getElementById("instagramUrl").href = response[0].instagram_link;
    }
});