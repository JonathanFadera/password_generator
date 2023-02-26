// Assignment Code
let generateBtn = document.querySelector("#generate");

// List of characters
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z'];
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const special = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', "]", '^', "_", '`', '{', '|', '}', '~'];

const generatePassword = function () {
// Confirm uppercase, lowercase, numbers, and special characters
  const uppercaseChar = confirm('Would you like to include uppercase characters?');
  const lowercaseChar = confirm('Would you like to include lowercase characters?');
  const numericChar = confirm('Would you like to include numeric characters?');
  const specialChar = confirm('Would you like to include special characters?');

  if ((uppercaseChar || lowercaseChar || numericChar || specialChar) === false) {
    alert("You must select at least one character type!");
    return generatePassword();
  }

// Prompt for password length
  const passLengthFunc = function () {
    let passLength = prompt("How many characters would you like your password to be? (8-128)");
    if (passLength >= 8 && passLength <= 128) {
      return passLength;
    } else {
      alert("Your password must be between 8 and 128 characters!");
      return passLengthFunc();
    }
  };

let passLenghtNum = passLengthFunc();

// function for creating array based on the password options
  let listSelect = [];
  
  if (uppercaseChar) {
    listSelect = listSelect.concat(uppercase);
  }
  if (lowercaseChar) {
    listSelect = listSelect.concat(lowercase);
  }
  if (numericChar) {
    listSelect = listSelect.concat(numbers);
  }
  if (specialChar) {
    listSelect = listSelect.concat(special);
  }

// create a password based on a looping function that will select a random character from the listSelect array 
  let password = '';
  // fixed the error of number of characters in the outputted password is always one greater than the length the user gave
  for (let i = 0; i < passLenghtNum; i++) {
    let randomNum = Math.floor(Math.random() * listSelect.length);
    password += listSelect[randomNum];
  }
  return password;
};


// Write password to the #password textarea
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
