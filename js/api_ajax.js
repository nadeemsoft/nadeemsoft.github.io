
$.ajax({
    type:"get",
    url:"http://mgcollege.pythonanywhere.com/apiv1/organisation_details/",
    dataType:"json",
    success:function(response){
    document.getElementById("logo").src= response[0].logo;
    document.getElementById("orgName").innerHTML = response[0].organisation_name;
    document.getElementById("contactNo").innerHTML = response[0].contact_no;
    document.getElementById("emailIdTop").innerHTML = response[0].email_id;
    document.getElementById("facebookUrl").href = response[0].facebook_link;
    document.getElementById("twitterUrl").href = response[0].twitter_link;
    document.getElementById("instagramUrl").href = response[0].instagram_link;
    document.getElementById("linkedinUrl").href = response[0].linkedin_link;
    document.getElementById("footerAddress").href = response[0].organisation_name;
    }
});

