/* ========================WRITE YOUR JS FROM HERE======================== */

// to validate email
function emailValidate() {
    var mailid = document.getElementById('email').value;
    var patt = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (patt.test(mailid)) {
        return true;
    } else {
        document.getElementById("same").innerHTML = "Entered mail ID does not match the format";
        document.getElementById("same").style.color = red;
        return false;
    }
}

window.onload = function() {
    document.getElementById('email_form').onsubmit = validateEmail;
}

// password validation
var Check = function (inputtxt) {
  var format =  ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,});
  if(inputtxt.value.match(format))
  {
    return true;
  }
  else
  {
    document.getElementById("reminder").innerHTML = "Password do not match the standard : password must be 8 to 15 characters long and must contain atleast one lowercase letter, one uppercase letter, one numeric digit, and one special character."
    document.getElementById("reminder").style.color = red;
    return false;
  }
}

// for password and cnfpassword field match
var confirm = function() {
  if((document.getElementById("pswd1").value != null) && (document.getElementById("pswd2").value != null)){
    if (document.getElementById('pswd1').value == document.getElementById('pswd2').value) {
      document.getElementById('pswd-alert').style.color = 'green';
      document.getElementById('pswd-alert').innerHTML = 'Passwords match!';
    } else {
      document.getElementById('pswd-alert').style.color = 'red';
      document.getElementById('pswd-alert').innerHTML = 'Try again. Passwords do not match.';
    }
  }
}

// number Check
var numcheck = function(){
  var mob=document.form.num.value;
  if (isNaN(mob)){
    return false;
  }else{
    return true;
  }
}
