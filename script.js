
const signInModal = document.getElementById('signInModal');
const signUpModal = document.getElementById('signUpModal');

const signInBtn = document.getElementById('signInBtn');
const signUpBtn = document.getElementById('signUpBtn');

const closeBtns = document.getElementsByClassName('close');

signInBtn.onclick = function() {
  signInModal.style.display = 'block';
}

signUpBtn.onclick = function() {
  signUpModal.style.display = 'block';
}

for (const btn of closeBtns) {
  btn.onclick = function() {
    signInModal.style.display = 'none';
    signUpModal.style.display = 'none';
  }
}

window.onclick = function(event) {
  if (event.target === signInModal || event.target === signUpModal) {
    signInModal.style.display = 'none';
    signUpModal.style.display = 'none';
  }
} 

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

document.getElementById('signInForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const email = document.getElementById('signInEmail').value;
  if (!validateEmail(email)) {
    alert('Invalid email syntax');
    return;
  }
  console.log('Sign in submitted');
  signInModal.style.display = 'none';
});

document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const email = document.getElementById('signUpEmail').value;
  if (!validateEmail(email)) {
    alert('Invalid email syntax');
    return;
  }
  console.log('Sign up submitted');
  signUpModal.style.display = 'none';
});
const signInForm = document.getElementById('signInForm');

signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;
    
    const registeredUsers = [
        { email: 'abdo123@gmail.com', password: '1234' },
        { email: 'lsd123@gmail.com', password: 'azerty' },
       
    ];

    const foundUser = registeredUsers.find(user => user.email === email && user.password === password);

    if (foundUser) {
        alert('Sign in successful!');
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});
