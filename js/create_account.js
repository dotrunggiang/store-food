//Login modal
var login = document.getElementById('modalLogin');
//Create_account modal
var create_account = document.getElementById('modalCreateAccount');
//Get btn forget_password
var btn = document.getElementById('createNewAccount');
//Get the <span> element that closes the modal
var span = document.getElementsByClassName('closeCreateAccount')[0];
//Get the <a> element that re-login
var relogin = document.getElementById('relogin');

btn.onclick = function(){
    login.style.display = 'none';
    create_account.style.display = 'block';
}

span.onclick = function(){
    create_account.style.display = 'none';
}

relogin.onclick = function(){
    create_account.style.display = 'none';
    login.style.display = 'block';
}

