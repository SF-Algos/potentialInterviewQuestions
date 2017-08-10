// - Find out if a given string is a palindrome
function palindrome(str){
  if (str.toLowerCase() === str.toString().toLowerCase().split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

// reverse a string.
function reverseString(str) {
  var reversed = [];
  for(i = str.length - 1; i >= 0; i--){
    reversed.push(str[i]);
  }
  return reversed.join("");
}