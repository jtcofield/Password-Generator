// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var passwordLenght = prompt("How many characters do you want your password to be?");
  var upperCase = confirm ("Include uppercase characters?")
  var lowerCase = confirm("Include lowercase characters?")
  var specialCharacters = confirm("Include special characters?")
  var numericCharacters = confirm("Include numbers?")
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

