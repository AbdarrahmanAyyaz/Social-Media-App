//let usernameCheck = true;
/*
registration.html – for guests to register accounts 
o require the user to enter a username that begins with a character ([a-zA-Z]). 
o require the user to enter a username that is 3 or more alphanumeric characters. 
o require the user to enter a password that is 8 or more characters AND contains at least 
1 upper case letter AND 1 number and 1 of the following special characters:   
/ * - + ! @ # $ ^ & ~ [ ] 
o require that the password and confirm password inputs are the same. 
o require the user to enter an email that is valid. 
▪ This one CAN BE done with the type attribute set to “email” 
o require the user to select that they are 13+ years of age. 
▪ This one CAN BE done with the HTML attribute “required” 
o require the user to select TOS and Privacy rules. 
▪ This one CAN BE done with the HTML attribute “required” 
 
When implementing the above requirements think about what happens when these requirements are 
not met. Some of these requirements can be verified as the user types and some can be verified when 
the user clicks the submit button. These design choices I leave up to you. If the data is invalid the form 
SHOULD NOT BE submitted. If the data is valid, simply let the page refresh or show a message saying the 
form was submitted. 
 */




let usernameCheck = false;
let passCheck = false;
let rPassCheck = false;
let emailCheck = false;

function validUsername(event) // event holds all the info when printed in console.log
{
    //let to initialization
    let elementUsername = event.target;
    let username = elementUsername.value;
    let usernameWarn = document.getElementById('usernameWarning');
    var userRGEX = /^[a-zA-Z][a-zA-Z0-9;]+$/;
    var userResult = userRGEX.test(username);
    //alert("User not valid" + userResult);
    if (username.length < 3) {
        usernameWarn.innerHTML = 'Please enter a username with a length longer than 3.'
            //to print error when less than 3
        usernameCheck = false;
        return false;
    } else if (!userResult) {

        usernameWarn.innerHTML = 'Please start with a character, and only use alphanumeric characters in the username.'
        usernameCheck = false;
        return false;
    } else {
        usernameWarn.innerHTML = ''
        usernameCheck = true;
        return true;
    }
    //

}



function validPassword(event) // event holds all the info when printed in console.log
{
    let elementPassword = event.target;
    let password = elementPassword.value;
    let passwordWarn = document.getElementById('passwordWarning');
    var passRGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*-+!\[\]@#$^&~])[A-Za-z\d/*-+!\[\]@#$^&~]{8,}$/;
    var passResult = passRGEX.test(password);

    if (passResult) {

        passwordWarn.innerHTML = ''
        passCheck = true;
        return true;
    } else {
        passwordWarn.innerHTML = 'Password must be at least 8 characters, include at least 1 uppercase letter, 1 special character from the following( / * - + ! @ # $ ^ & ~ [ ] ) and 1 number.'
        passCheck = false;
        return false;
    }



}

function validRepeatPassword(event) // event holds all the info when printed in console.log
{
    let elementRpassword = event.target;
    let rPassword = elementRpassword.value;
    let rPasswordWarning = document.getElementById('rPasswordWarning');
    let password = document.getElementById('psw').value;

    if (password != rPassword) {

        rPasswordWarning.innerHTML = 'The passwords do not match, please try again.'
        rPassCheck = false;
        return true;
    } else {
        rPasswordWarning.innerHTML = ''
        rPassCheck = true;
        return false;

    }

}

function validEmail(event) // event holds all the info when printed in console.log
{
    let elementEmail = event.target;
    let email = elementEmail.value;
    let emailWarn = document.getElementById('emailWarning');
    var emailRGEX = /^\S+@\S+\.\S+$/;
    var emailResult = emailRGEX.test(email);


    if (emailResult) {

        emailWarn.innerHTML = ''
        emailCheck = true;
        return true;
    } else {
        emailWarn.innerHTML = 'Must be a valid email address.'
        emailCheck = false;
        return false;
    }



}

document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();
    let terms = document.getElementById('checkTerms').checked;

    let age = document.getElementById('checkAge').checked;
    if (usernameCheck & passCheck & rPassCheck & emailCheck & terms & age) {
        document.getElementById("myForm").submit();


    }
});

document.getElementById('username').addEventListener('input', validUsername);
document.getElementById('psw').addEventListener('input', validPassword);
document.getElementById('psw-repeat').addEventListener('input', validRepeatPassword);
document.getElementById('email').addEventListener('input', validEmail);
//check mdn if confused