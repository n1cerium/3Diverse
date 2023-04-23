

// function validatePassword(password) {
//     if(password == "") {
//         error.password = "Enter a password";
//         return false;
//     }
//     if(password.length < 8) { // check for length
//         error.password = "The password must be at 8 characters long";
//         return false;
//     }
//     if(/[A-Z]/.test(password) == false) { // check for uppercase
//         error.password = "The password must contain at least 1 upper case";
//         return false;
//     }
//     if(/[a-z]/.test(password) == false) { // check for lowercase
//         error.password = "The password must contain at least 1 lower case";
//         return false;
//     }
//     if(/[0-9]/.test(password) == false){
//         error.password = "The password must contain at least 1 numeric value";
//         return false;
//     }
//     if(/[_!@]/.test(password) == false) {
//         error.password = "A password can only contain '_', '@', and '!'";
//         return false;
//     }
//     return true;
// }

// function validateEmail(email) {
//     let atIdx = email
//     if(email == "") {
//         error.email = "Enter an email";
//         return false;
//     }
//     console.log(String(email).match(/[@]/g));
//     if(String(email).match(/[@]/g) == null) { // must contains @
//         error.email = "The email must have `@`";
//         return false;
//     }
//     atIdx = email.indexOf('@');
//     console.log(((String(email).substring(atIdx)).match(/[.]/g)));
//     if(String(email).substring(atIdx).match(/[.]/g) == null) { // a dot must be present after the @ 
//         error.email = "The email must contains a dot after the `@`";
//         return false;
//     }
//     return true;
// }

function validate(val) {
    let error = []
    let atIdx;
    atIdx = String(val.email).indexOf('@');
    if(val.email == "") {
        error.email = "Enter an email";
    } else if(String(val.email).match(/[@]/g) == null) { // must contains @
        error.email = "The email must have `@`";
    } else if (String(val.email).substring(atIdx+2).match(/[.]/g) == null) {
        error.email = "Invalid Email Format";
    }
    else {
        error.email = "";
    }

    if(val.password == "") {
        error.password = "Enter password";
    } else {
        error.password = "";
    }

    return error;
}

export default validate;


