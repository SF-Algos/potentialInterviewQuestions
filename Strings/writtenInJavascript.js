// - Find out if a given string is a palindrome
function palindrome(str){
  if (str.toLowerCase() === str.toString().toLowerCase().split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}
  