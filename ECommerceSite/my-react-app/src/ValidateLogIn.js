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


