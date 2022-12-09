//---------------------------***********////////////////
var password = document.getElementById('password')
var password_eye = document.getElementById('password_eye')
//---------------------------***********////////////////
/////////////////////// alert /////////////////////////
$('#click').on('click', function () {
    alert('test alert')
})
//---------------------------------------------------//
function togglePassword() {
    if (password.type =='password') {
        password.type ='text';
        password_eye.classList.add('fa-eye');
        password_eye.classList.remove('fa-eye-slash');
    } else{
        password.type ='password';  
        password_eye.classList.remove('fa-eye');
        password_eye.classList.add('fa-eye-slash');
    }
}
document.getElementById('dropdown-menu').addEventListener('click', function(){
    document.getElementById('sidebar').classList.add('active')
})