// script contact form and input

function fn1(){
name=document.forms["myForm"]["name"].value;
email=document.forms["myForm"]["email"].value;
if(name==""){
  alert("Enter Name");
}
if(email==""){
  alert("Enter Email");
}
}
console.log("Name and email entered");

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
