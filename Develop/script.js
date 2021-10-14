// Assignment Code

var generateBtn = document.querySelector("#generate");
var firstPrompt = confirm("Would you like to include uppercase letters?")
var secondPrompt = confirm("Would you like to include lowercase letters")
var thirdPrompt = confirm("Would you like to include special characters?")
var fourthPrompt = confirm("Would you like to include numbers?")
var fifthPrompt = prompt("Please choose how many characters you would like in your password. \nPlease note that character length must be between 8 and 128.")


console.log(fifthPrompt)
if (firstPrompt && secondPrompt && thirdPrompt && fourthPrompt) {
  console.log("It worked")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
