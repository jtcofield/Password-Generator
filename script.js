// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(numOfCharacters){
  
  var text = "";
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
  var char_list_two = "abcdefghijklmnopqrstuvwxyz"
  var char_list_three = "1234567890"
  var char_list_four = "`~!@#$%^&*()-_=+\|]}[{';:/?.>"
  var passwordLength = prompt("How many characters do you want your password to be?");
  var upperCase = confirm ("Include uppercase characters?");
  var lowerCase = confirm("Include lowercase characters?");
  var specialCharacters = confirm("Include special characters?");
  var numericCharacters = confirm("Include numbers?");
  
  parseInt(passwordLength);
  console.log(passwordLength);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(specialCharacters);
  console.log(numericCharacters);
  console.log(Number(upperCase + lowerCase + specialCharacters + numericCharacters));

  if (passwordLength > 128) {
    alert("Password must be less than 128 characters");
    location.reload()
  } 
  if (passwordLength < 5){
    alert("Password must be greater than 5 characters")
    location.reload()
  }

  // if (upperCase === true) {
  //   for (i=0; i < (passwordLength/4); i++){
  //     text += char_list.charAt(Math.floor(Math.random() * char_list.length) +1)
  //   }}
  
  
  // if (lowerCase === true){
  //   for (i=0; i < (passwordLength/4); i++){
  //   text += char_list_two.charAt(Math.floor(Math.random() * char_list_two.length) +1)}
  // }

  // if (numericCharacters === true){
  //   for (i=0; i < (passwordLength/4); i++){
  //   text += char_list_three.charAt(Math.floor(Math.random() * char_list_three.length) +1)}
  // }

  // if (specialCharacters === true){
  //   for (i=0; i < (passwordLength/4); i++){
  //   text += char_list_four.charAt(Math.floor(Math.random() * char_list_four.length) +1)}
  // }

  for (i=0; i < passwordLength/(Number(upperCase + lowerCase + numericCharacters + specialCharacters)); i++){
    if (upperCase === true) {text += char_list.charAt(Math.floor(Math.random() * char_list.length + 1))};
    if (lowerCase === true) {text += char_list_two.charAt(Math.floor(Math.random() * char_list_two.length + 1))};
    if (numericCharacters === true) {text += char_list_three.charAt(Math.floor(Math.random() * char_list_three.length + 1))};
    if (specialCharacters === true) {text += char_list_four.charAt(Math.floor(Math.random() * char_list_four.length + 1))};
  }
  
  console.log(text)
  return text;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)