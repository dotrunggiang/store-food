//Login modal
var login = document.getElementById('modalLogin');
//Forget_password modal
var forget_password = document.getElementById('modalForgetPass');
//Get btn forget_password
var btn = document.getElementById('forgetPassword');
//Get the <span> element that closes the modal
var span = document.getElementsByClassName('closeForgetPass')[0];
//Get ID Button Cancle
var cancle = document.getElementById('cancle');

//When user click 'Forget Password' modal login hide, open modal forget password
btn.onclick = function(){
    login.style.display = 'none';
    forget_password.style.display = 'block';
}

span.onclick = function(){
    forget_password.style.display = 'none';
}

cancle.onclick = function(){
    forget_password.style.display = 'none';
}


