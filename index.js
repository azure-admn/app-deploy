const form= document.getElementById("form");
const username = document.getElementById("Logname");
const email=document.getElementById("signEmail");
const message=document.getElementById("message");


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
console.log(validateEmail());


function verifyPassword() {  
    var pw = document.getElementById("logPassword").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "*Enter atleast 8 characters*";  
       return false;  
    }else if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "*Enter totally 15 character*";  
       return false;  
    }else {  
        document.getElementById("message").innerHTML = "*Its correct*";
        message.style.cssText='color: green'
    }  
  }  


  function matchPassword() {   
    var pw = document.getElementById("logPassword").value;
    var conpw=document.getElementById("conPassword").value;
    if(pw == conpw)  
    {   
        alert("Registered created successfully");   
    } else {  
        alert("Passwords did not match");
    }  
  }
    