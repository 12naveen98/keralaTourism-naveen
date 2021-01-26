let email=document.getElementById("inputEmail4");
let emailLabel=document.getElementById("mailLabel");
let pwd=document.getElementById("inputPassword4");
let pwdLabel=document.getElementById("pwdlabel");
let emailhelp=document.getElementById("emailHelp");

function loginvalidation(){
if(email.value==""||pwd.value==""){
    email.style.borderColor="red";
    emailLabel.innerText="Email Cannot be empty";
    emailLabel.style.color="red";
    pwd.style.borderColor="red";
    pwdLabel.innerText="Password Cannot be empty";
    pwdLabel.style.color="red";
  return false;
}
    

else if(email.value!=""){
    let regex=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    if(regex.test(email.value)){
      return true;
    }
    else{
        emailLabel.innerText="Please enter email in correct format";
        emailhelp.innerText="Correct format is example12@gmail.com";
        return false;
        
    }
} 
    

}


function password() {
        
   
  let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
  let mediumRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  

    if (pwd.value.length<8) {
        pwd.style.borderColor="red"
        pwdLabel.innerText="Weak";
        pwdLabel.style.color="red";
        // marquee.innerText="Please include characters,numericals,Capital and samll letters";
        // marquee.style.color="red";
        
        
  } else if (strongRegex.test(pwd.value)) {
        pwd.style.borderColor="green";
        pwdLabel.innerText="Strong";
        pwdLabel.style.color="green";
        // marquee.innerText="Good Job!!!Strong password";
        // marquee.style.color="green";
       
        
  } else if (mediumRegex.test(pwd.value)) {
        pwd.style.borderColor="orange";
        pwdLabel.innerText="medium";
        pwdLabel.style.color="orange";
        // marquee.innerText="Please include characters,numericals,Capital and samll letters";
        // marquee.style.color="orange";
       
       
  } else {
        pwd.style.borderColor="red";
        pwdLabel.innerText="Weak";
        pwdLabel.style.color="red";
        // marquee.innerText="Please include characters,numericals,Capital and samll letters";
        // marquee.style.color="red";
        
        
  }
}