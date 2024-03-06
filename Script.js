function validateForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (!email || !password) {
    alert('Email and password are required.');
    return false;
  }

  // Add more complex validation if needed

  return true;
}


