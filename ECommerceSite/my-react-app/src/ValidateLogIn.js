//checks for valid login user info
function validate(val) {
    let error = []
    let atIdx;
    atIdx = String(val.email).indexOf('@');
    //check if email is valide and has @
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
    //check if password is entered
    if(val.password == "") {
        error.password = "Enter password";
    } else {
        error.password = "";
    }

    return error;
}

export default validate;


