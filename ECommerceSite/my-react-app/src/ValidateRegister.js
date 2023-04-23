
function validate(val) {
    let error = [];
    error.password = validatePassword(val)
    error.email = validateEmail(val)
    
    if(val.name == "") {
        error.name = "Enter your name"
    } else {
        error.name = "";
    }

    return error;
}

function validatePassword(val) {
    if(val.password == "") {
        return "Enter a password";
    }
    if(val.password.length < 8) { // check for length
        return "The Password must be at least 8 characters long";
    }
    if(/[A-Z]/.test(val.password) == false) { // check for uppercase
        return "The password must contain at least 1 upper case";
    }
    if(/[a-z]/.test(val.password) == false) { // check for lowercase
        return "The password must contain at least 1 lower case";
    }
    if(/[0-9]/.test(val.password) == false){
        return "The password must contain at least 1 numeric value";
    }
    if(/[_!@]/.test(val.password) == false) {
        return "A password can only contain '_', '@', and '!'";
    }
    return "";
}

function validateEmail(val) {
    let atIdx = val.email
    atIdx = String(val.email).indexOf('@');
    if(val.email == "") {
        return "Enter an email";
    }
    if(String(val.email).match(/[@]/g) == null) { 
        return "The email must have `@`";
    }
    if(String(val.email).substring(atIdx+2).match(/[.]/g) == null) { // a dot must be present after the @ 
        return "Invalid Email format";
    }
    return "";
}


export default validate;
