
document.getElementById('registrationForm').addEventListener('submit',function(e){
e.preventDefault();
document.querySelectorAll('.error').forEach(x=>x.innerText='');
document.getElementById('success').innerText='';
let valid=true;
const name=document.getElementById('name').value.trim();
const email=document.getElementById('email').value.trim();
const phone=document.getElementById('phone').value.trim();
const password=document.getElementById('password').value;
const confirmPassword=document.getElementById('confirmPassword').value;

if(name.length<3){document.getElementById('nameError').innerText='Name must be at least 3 characters';valid=false;}
if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){document.getElementById('emailError').innerText='Invalid email';valid=false;}
if(!/^[0-9]{10}$/.test(phone)){document.getElementById('phoneError').innerText='Phone must be 10 digits';valid=false;}
if(password.length<8){document.getElementById('passwordError').innerText='Password must be at least 8 characters';valid=false;}
if(password!==confirmPassword){document.getElementById('confirmPasswordError').innerText='Passwords do not match';valid=false;}
if(valid){document.getElementById('success').innerText='Registration Successful!';}
});
