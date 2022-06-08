//Login modal
var login = document.getElementById('modalLogin');
//Get btn Login
var btn = document.getElementById('userAccount');
//Get the <span> element that closes the modal
var span = document.getElementsByClassName('closeLogin')[0];
// When the user clicks on the button, open the modal
btn.onclick = function () {
    login.style.display = 'block';
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    login.style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == login) {
        login.style.display = "none";
    }
}