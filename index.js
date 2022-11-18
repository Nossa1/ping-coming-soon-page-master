function validEmail() {
  var mail = document.getElementById('email').value;
  
  var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
   if (mail.match(email)) {
   
    alert("Welcome!")
    } else if (!mail.match(email)) {
      document.querySelector(".errorMsg").style.display = "block";
      
      document.getElementsByName('email')[0].placeholder='email@example/com';
      
    } else {
      document.querySelector(".errorMsg").style.display = "none";
    }
  
  }