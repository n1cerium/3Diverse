//checks for valid register user info
function validate(val) {
    let error = [];
    error.password = validatePassword(val)
    error.email = validateEmail(val)
    error.zipcode = validateZipcode(val)
    
    
    //checks all areas required are filled correctly
    if(val.F_Name === "") {
        error.F_Name = "Enter your First Name";
    } else {
        error.F_Name = "";
    } 
    if(val.L_Name === "") {
        error.L_Name = "Enter your Last Name";
    } else {
        error.L_Name = "";
    }
    if(val.address_line === "") {
        error.address_line = "Enter your Address Line";
    } else {
        error.address_line = "";
    }
    if(val.city === "") {
        error.city = "Enter your City";
    } else {
        error.city = "";
    }
    if(val.state === "") {
        error.state = "Enter your State";
    } else {
        error.state = "";
    }
    if(val.country === "") {
        error.country = "Enter your Country";
    } else {
        error.country = "";
    }
    //check if phone is not letters
    if(val.phone === "") {
        error.phone_number = "Enter your Phone Number";
    } else if((/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(val.phone) === false) {
        error.phone_number = "Enter a valid Phone Number";
    } else {
        error.phone_number = "";
    } 



    return error;
}
//check for valid zip code by length 
function validateZipcode(val) {
    if(val.zipcode === "") {
        return "Enter a Zipcode"
    }
    if(String(val.zipcode).length != 5) {
        return "Enter a Valid Zipcode";
    }
    for(let i = 0; i < String(val.zipcode).length; i++) {
        if(!(String(val.zipcode)[i] >= 0 && String(val.zipcode)[i] <= 9)) {
            return "Please enter a Valid Zipcode"
        }
    }
    return "";
}
//check for valid password requiring ...
function validatePassword(val) {
    if(val.password === "") {
        return "Enter a password";
    }
    if(String(val.password).length < 8) { // check for length
        return "The Password must be at least 8 characters long";
    }
    if(/[A-Z]/.test(val.password) === false) { // check for uppercase
        return "The password must contain at least 1 upper case";
    }
    if(/[a-z]/.test(val.password) === false) { // check for lowercase
        return "The password must contain at least 1 lower case";
    }
    if(/[0-9]/.test(val.password) === false){ // check for number
        return "The password must contain at least 1 numeric value";
    }
    if(/[_!@]/.test(val.password) === false) { // check for symbol
        return "A password can only contain '_', '@', and '!'";
    }
    return "";
}
//check for valide email 
function validateEmail(val) {
    let atIdx = val.email
    atIdx = String(val.email).indexOf('@');
    if(val.email === "") {
        return "Enter an email";
    }
    if (String(val.email).match(/[@]/g) === null) { // a @ must be present 
        return "The email must have `@`";
    }
    if(String(val.email).substring(atIdx+2).match(/[.]/g) == null) { // a dot must be present after the @ 
        return "Invalid Email format";
    }
    return "";
}


export default validate;
