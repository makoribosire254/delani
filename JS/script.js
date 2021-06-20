var name;
var email;

function fn1(){
  name=document.forms["myForm"]["name"].value;
  email=document.forms["myForm"]["email"].value;
if(name==""){
  alert("Enter Name");
}
if(email==""){
  alert("Enter Email");
}
alert(name.value + ""+ "We've received Your message. Thank you for contacting us");
}

//Toggling the description upon clicking the services_icons

$(document).ready(function(){
$(.clickable).click(function(){
  $("#p_hide").toggle();
  $("#p_hide").toggle();
});
});
