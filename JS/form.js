let fname=document.getElementById("firstname");
let fnameLabel=document.getElementById("nameLabel");
let email=document.getElementById("inputEmail4");
let emailLabel=document.getElementById("mailLabel")
let pwd=document.getElementById("inputPassword4");
let pwdLabel=document.getElementById("pwdlabel");
let Repwd=document.getElementById("inputPassword5");
let Repwdlabel=document.getElementById("repwdLabel");
let phone=document.getElementById("inputPhone");
let phlabel=document.getElementById("phonelabel");
let address=document.getElementById("inputAddress");
let addresslabel=document.getElementById("addLabel");
let city=document.getElementById("inputCity");
let cityLabel=document.getElementById("citylabel");
let state=document.getElementById("inputState");
let stateLabel=document.getElementById("statelabel");
let zip=document.getElementById("inputZip");
let zipLabel=document.getElementById("ziplabel");
let marquee=document.getElementById("marq");
let formone=document.getElementById("formOne");

 function basicValidation(){
   
    if(fname.value.trim()==""||email.value.trim()==""||pwd.value.trim()==""||phone.value.trim()==""||Repwd.value.trim()==""||
    address.value.trim()==""||city.value.trim()==""||state.value.trim()==""||zip.value.trim()=="")
    {
      marquee.innerText="You missed an information marked *";
      marquee.style.color="red";
      if(fname.value.trim()=="")
      {fname.style.borderColor="red";
       fnameLabel.innerText="Firstname Cannot be empty";
       fnameLabel.style.color="red";}

      if(email.value.trim()=="")
      {email.style.borderColor="red";
       emailLabel.innerText="Email Cannot be empty";
       emailLabel.style.color="red";}

      if(pwd.value.trim()==""||pwd.value.length<8)
      {pwd.style.borderColor="red";
       pwdLabel.innerText="Password Cannot be empty";
       pwdLabel.style.color="red";}
      
       if(Repwd.value.trim()=="")
       {Repwd.style.borderColor="red";
       Repwdlabel.innerText="Password Cannot be empty";
       Repwdlabel.style.color="red";}

      if(phone.value.trim()=="")
       {phone.style.borderColor="red";
        phlabel.innerText="Phone Cannot be empty";
        phlabel.style.color="red";}

      if(address.value.trim()=="")
        {address.style.borderColor="red";
         addresslabel.innerText="Address Cannot be empty";
         addresslabel.style.color="red";}

      if(city.value.trim()=="")
        {city.style.borderColor="red";
         cityLabel.innerText="City Cannot be empty";
         cityLabel.style.color="red";}

      if(state.value.trim()=="")
        {state.style.borderColor="red";
         stateLabel.innerText="State Cannot be empty";
         stateLabel.style.color="red";}

      if(zip.value.trim()=="")
        {zip.style.borderColor="red";
         zipLabel.innerText="Zip Cannot be empty";
         zipLabel.style.color="red";}
         
  

        return false;
    }

   else if(phone.value!=""){
      let regex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if(regex.test(phone.value)){
          if(phone.value.length=12){
          return true;}
          
      }
      else{
          phone.style.borderColor="red"
          phlabel.innerText="Incorrect format";
          phlabel.style.color="red";
          marquee.innerText="Correct format is XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
          marquee.style.color="red";
          return false; }

}


else{
  return true;}


 }

       function password() {
        
        let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
        let mediumRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        
      
          if (pwd.value.length<8) {
              
              pwd.style.borderColor="red";
              pwdLabel.innerText="Weak";
              pwdLabel.style.color="red";
              marquee.innerText="Please include characters,numericals,Capital and samll letters";
              marquee.style.color="red";
              
          
              
              
              
        } else if (strongRegex.test(pwd.value)) {
              pwd.style.borderColor="green"
              pwdLabel.innerText="Strong";
              pwdLabel.style.color="green";
              marquee.innerText="Good Job!!!Strong password";
              marquee.style.color="green";
              
              
              
        } else if (mediumRegex.test(pwd.value)) {
            //  formone.setAttribute("action","./SignIn.html");
              pwd.style.borderColor="orange"
              pwdLabel.innerText="medium";
              pwdLabel.style.color="orange";
              marquee.innerText="Please include characters,numericals,Capital and samll letters";
              marquee.style.color="orange";
              
              
              
             
        } 
         
      
        else {
              // formone.setAttribute("action","./SignIn.html");
              pwd.style.borderColor="red"
              pwdLabel.innerText="Weak";
              pwdLabel.style.color="red";
              marquee.innerText="Please include characters,numericals,Capital and samll letters";
              marquee.style.color="red";
              return false;
              
              
              
        }
    }


    //  function email(){
    //    if(email.value!=""){
    //     let regex=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    //     if(regex.test(email.value)){
    //       return true;
    //     }
    //     else{
    //         emailLabel.innerText="Please enter email in correct format";
    //         emailhelp.innerText="Correct format is example12@gmail.com";;
    //         return false;
            
    //     }

      
    










   