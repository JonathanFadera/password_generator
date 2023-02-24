let generateBtn = document.querySelector("#generate");

const uppercaseCharList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercaseCharList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numericCharList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharList = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', "]", '^', "_", '`', '{', '|', '}', '~'];

const generatePassword = function () {

  const uppercaseChar = confirm("Would you like to include uppercase characters?");
  const lowercaseChar = confirm("Would you like to include lowercase characters?");
  const numericChar = confirm("Would you like to include numeric characters?");
  const specialChar = confirm("Would you like to include special characters?");


  if ((uppercaseChar || lowercaseChar || numericChar || specialChar) === false) {
    alert("You must select at least one character type!");
    return generatePassword();
  }
  const passLengthFunc = function () {
    let passLength = prompt("How many characters would you like your password to be? (8-128)");
    if (passLength >= 8 && passLength <= 128) {
      return passLengthFunc;
    } else {
      alert("Your password must be between 8 and 128 characters!");
      return passLengthFunc();
    }
  };

let passLenghtNum = passLengthFunc();

  let listSelect = [];
  
  if (uppercaseChar) {
    listSelect = listSelect.concat(uppercaseCharList);
  }
  if (lowercaseChar) {
    listSelect = listSelect.concat(lowercaseCharList);
  }
  if (numericChar) {
    listSelect = listSelect.concat(numericCharList);
  }
  if (specialChar) {
    listSelect = listSelect.concat(specialCharList);
  }


  let passwordNew = "";
  for (let i = 0; i <= passLenghtNum; i++) {
    const randomNum = Math.floor(Math.random() * listSelect.length);
    passwordNew += listSelect[randomNum];
  }
  return passwordNew;
};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
