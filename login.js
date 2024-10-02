function togglepwd(){
    var user_pass = document.getElementById("txtpwd")
    var toggle_pass = document.getElementById('chkshow')

    if(toggle_pass.checked){
        user_pass.type = "text"
    }
    else{
        user_pass.type = "password"
    }
}

function validateusr(){
    var user_name =  document.getElementById('user_name');
    var er = user_name.nextElementSibling;

    if(user_name.value.trim() === "" || user_name.value.trim().length < 5){
        er.innerHTML = "<i class='fa-solid fa-circle-exclamation failure-icon'></i> Username must be minimum 5 characters."
    }
    else{
        er.innerHTML = '<i class="fa-solid fa-circle-check success-icon"></i>'
    }
}

function validatemail(){
    var mail =  document.getElementById('mail');
    var er = mail.nextElementSibling;
    var email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;

    if(mail.value.trim() === "" || !email_pattern.test(mail.value.trim())){
        er.innerHTML = "<i class='fa-solid fa-circle-exclamation failure-icon'></i> Enter valid email."
    }
    else{
        er.innerHTML = '<i class="fa-solid fa-circle-check success-icon"></i>'
    }
}

function validatefields(){
    var isValid = true;
    var user_name =  document.getElementById('user_name');
    var email_pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ;
    var email = document.getElementById('mail');
    
    if (user_name.value.trim() === "" || user_name.value.trim().length < 5){
        isValid=false;
    }
    
    if (email.value.trim() === "" || !email_pattern.test(email.value.trim())){
        isValid=false;
    }

    return isValid;
}