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
}
console.log("Name and email entered");
