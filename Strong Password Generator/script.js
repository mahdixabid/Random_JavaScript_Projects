let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*_-+=";
let passwordTxt = document.getElementById("password");
let length = document.getElementById("length");
let NumberData = document.getElementById("numbers");
let SymbolsData = document.getElementById("symbols");
let generateBtn = document.getElementById("generate");


generateBtn.onclick = function() {
    let characters = alpha;
    if (NumberData.checked) {
        characters += numbers;
    }
    if (SymbolsData.checked) {
        characters += symbols
    }
    if (length.value >= 64) {
        alert("please choose a lenght under 64");
    }
    if (length.value < 6) {
        alert("please choose a lenght over 6");
    } else {
        passwordTxt.value = generatePassword(length.value, characters);
    }

};

function generatePassword(length, characters) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characters.charAt(
            (Math.random() * characters.length)
        );
    }
    return password;
};
// Copy Output

function passwordResult() {
    let copyText = document.getElementById("password");
    copyText.select();
    if (copyText.value == "")
        alert("Output is Empty")
    else {
        navigator.clipboard.writeText(copyText.value);
        alert("Password Copied To Clipboard");
    }

}