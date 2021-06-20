// script contact form and input

function fn1(){
var name= document.getElementById('txtName').value;
var email=document.getElementById('txtEmail').value;
var comments=document.getElementById("comments").value;
alert(comments);
alert(name +  ""  + "Than you for contacting us.");
}


//Toggling the description upon clicking the services_icons
$(document).ready(function(){
$("div#p_hide1").hide();
$("#dw1,#p_hide1").click(function(){
  $("#p_hide1,#dw1").toggle();
});

$("div#p_hide2").hide();
$("#dw2,#p_hide2").click(function(){
  $("#dw2,#p_hide2").toggle();
});
  $("div#p_hide3").hide();
  $("#dw3,#p_hide3").click(function(){
    $("#dw3,#p_hide3").toggle();
});
});
