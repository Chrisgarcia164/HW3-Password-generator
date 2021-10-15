// Assignment Code

var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var numbs = "1234567890"
  var specialCharacters = "!@#$%^&*()~_+{}|:<>?`-=[];',./"


    var passwordLength = prompt("Please choose how many characters you would like your password to have. \nPlease note that password length must be between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Input invalid \nPlease try again")
    }
    else {
    var firstPrompt = confirm("Would you like to include uppercase letters?");
    var secondPrompt = confirm("Would you like to include lowercase letters");
    var thirdPrompt = confirm("Would you like to include special characters?");
    var fourthPrompt = confirm("Would you like to include numbers?");
    var combinedPrompts = []
    var password = ""
    if (firstPrompt) {
      combinedPrompts.push(upperCase)
    }
    if (secondPrompt) {
      combinedPrompts.push(lowerCase)
    }
    if (thirdPrompt) {
      combinedPrompts.push(specialCharacters) 
    }
    if (fourthPrompt) {
      combinedPrompts.push(numbs)
    }
    newPasswordLength = parseInt(passwordLength)
    console.log(newPasswordLength)


  

    for (var i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * combinedPrompts.length);
      var allChars = combinedPrompts.join();
      var rando = Math.floor(Math.random() * allChars.length);
      password += allChars[rando];
    }

    return password
    
    }
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
