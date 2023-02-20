// Array of special characters to be included in password
var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".",];

// Array of lowercase letters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array of uppercase letters
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array of numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
//Add event listener to generate button
generateBtn.addEventListener("click", initApp);

// function that order the calls to the other functions
function initApp() {
  let passLength = getPassLenghtOptions();
  console.log{`Password length is ${passLength}`};
  let options = getPassCharacterOptions(passLength);
  console.log{`User Options are:`};
  console.log(options);
  let charArray = getCharArray(options);
  console.log{`Character Array is ${charArray}`};
  // let chat = getRandomElement(charArray);
  let password = generatePassword(charArray, passLength);
  console.log{`Password is ${password}`};
  writePassword(password);
}
// function to prompt user for password length
function getPassLengthOptions() {
  let passLength = 0;
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    passLength = parseInt(
      window.prompt(
        "How many character password do you need?\nYou must choose a number between 8 and 128."
      )
    );
  }
  return passLength;
}

// function to prompt user for character options
function getPassCharacterOptions(){
  let option = { specialCharacters: false, lowerCase: false, upperCase: false, numbers: false };
  while (
    !option.specialCharacters &&
    !option.lowerCase &&
    !option.upperCase &&
    !option.numbers
  ) {
    alert(
      `You must choose at least one character type for your password:
      Special Characters, Lower Case, Upper Case, or Numbers.`
    );
options.specialCharacters = confirm(
      "Click OK to confirm including special characters.\n" +
        specialCharacters.join("")
    );
    options.lowerCase = confirm(
      "Click OK to confirm including lower case characters. \n" +
        lowerCase.join("")
    );
    options.upperCase = confirm(
      "Click OK to confirm including upper case characters. \n" +
        upperCase.join("")
    );
    options.numeric = confirm(
      "Click OK to confirm including numeric characters. \n" +
        numbers.join("")
    
    );
  } return options;
}

// function for creating character array based on password options
function generateCharArray(options) {
  let charArray = [];
  if (options.specialCharacters)  {
    charArray = charArray.concat(specialCharacters);
  }
  if (options.lowerCase) {
    charArray = charArray.concat(lowerCase);
  }
  if (options.upperCase) {
    charArray = charArray.concat(upperCase);
  }
  if (options.numeric) {
    charArray = charArray.concat(numbers);
  }
  return charArray;
  
}

// function for getting random element from array
function getRandomCharacter(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let char = array[randomIndex];
  return char;
}

// function to generate password with user input and options
function generatePassword(charArray, passLength) {
  let password = "";
  for (let i = 0; i < passLength; i++) {
    let character = getRandomElement(charArray);
    password = password + character;
  } return password;
}

// function to write password to the #password input
function writePassword(password) {
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}