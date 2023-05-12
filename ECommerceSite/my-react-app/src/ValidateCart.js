function validate(val) {
    let error = []
    error.C_Number = ValidateCardNum(val);
    error.C_Expiration = ValidateExpiration(val);
    error.C_Code = ValidateCVC(val);
    error.C_Postal = ValidatePostal(val);

    if(String(val.C_Postal) == "") {
        error.C_Name = "Please enter the Name on the Card";
    } else {
        error.C_Name = "";
    }

    return error;
   
}

function ValidateCardNum(val) {
    let TempCardVal = String(val.C_Number).replaceAll(" ", "");
    if(TempCardVal === "") {
        return "Please your Card Number";
    }
    if(TempCardVal.length != 16 || isNaN(TempCardVal)) {
        return "Enter a valid Card Number"
    }
    return "";
}
function ValidateExpiration(val) {
    let DateSplit = String(val.C_Expiration).split(" ");
    const months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dte = new Date();
    let todayMonth = dte.getMonth();
    let todayYear = dte.getFullYear()
    let idxMonth = months.indexOf(DateSplit[0]);
    if(String(val.C_Expiration) == "") {
        return "Please enter an Expiration Date";
    }
    if(DateSplit.length != 2) {
        return "Please enter a valid Expiration Date";
    }
    if(!months.includes(DateSplit[0])) {
        return "Enter a valid Month";
    }
    if(DateSplit[1].length != 4 || isNaN(DateSplit[1])) {
        return "Enter a Valid Year";
    }
    if((parseInt(DateSplit[1]) == todayYear && idxMonth < todayMonth) || parseInt(DateSplit[1]) < todayYear) {
        return "Your Card is Expired";
    }
    return "";

}
function ValidateCVC(val) {
    let TempCode = String(val.C_Code)
    if(TempCode === "") {
        return "Please enter a CVC Code";
    }
    if(TempCode.length != 3 || isNaN(TempCode)) {
        return "Please enter a valid CVC Code"
    }
    return "";
}

function ValidatePostal(val) {
    let TempPostal = String(val.C_Postal);
    if(TempPostal === "") {
        return "Please enter a Postal Code";
    }
    if(TempPostal.length != 5 || isNaN(TempPostal)) {
        return "Please enter a valid Postal Code"
    }
    return "";

}
export default validate;