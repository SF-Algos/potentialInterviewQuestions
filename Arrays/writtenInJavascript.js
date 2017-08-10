// - Merge 2 ordered arrays
function mergeTwoArrays(arr){
  return arr[0].sort().concat(arr[1].sort());
}

mergeTwoArrays([ ['b', 'a'], ['l', 'z', 'y'] ]);

// - Find out if a given string is a palindrome
function palindrome(str){
  if (str.toLowerCase() === str.toString().toLowerCase().split('').reverse().join('')){
    return true;
  } else {
    return false;
  }
}
  