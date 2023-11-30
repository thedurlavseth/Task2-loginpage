var nameerror=document.getElementById("nameerror")
var emailerror=document.getElementById("emailerror")
var phoneerror=document.getElementById("phoneerror")
var messageerror=document.getElementById("messageerror")
var submiterror=document.getElementById("submiterror")


function validatename(){
    var name=document.getElementById("contactname").value;

if(name.length==0)
{
    nameerror.innerHTML="Name Is Required"
    return false;
}

if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameerror.innerHTML="Write Full Name"
    return false;
}
nameerror.innerHTML='<i class="fa-solid fa-circle-check"></i>'
return true;
}

function validatephone(){
    var phone=document.getElementById("contactphone").value;  
    if(phone.length==0)
    {
        phoneerror.innerHTML="phone no is required"
        return false;
    }
    if(phone.length !== 10)
    {
        phoneerror.innerHTML="phone no should be 10 digit"
        return false
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneerror.innerHTML="Only digit"
        return false
    }
    phoneerror.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;

}

function validateemail(){
    var email=document.getElementById("contactemail").value;
    if(email.length==0)
    {
        emailerror.innerHTML="Email Is Required"
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
        emailerror.innerHTML="Email Is Invalid"
        return false;
    }
    emailerror.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validatemessage(){
    var message=document.getElementById("contactmessage").value;
    var required=50;
    var left=required-message.length;

    if(left>0){
        messageerror.innerHTML=left+"more character required"
        return false
    }
    messageerror.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;    

}

function validateform(){
    if (!validatename() || !validateemail() || !validatemessage() || !validatephone()){
        submiterror.style.display='block'
        submiterror.innerHTML="Please fix errror to submit"
        setTimeout(function(){submiterror.style.display='none';},900);

        
        return false;
    }
}