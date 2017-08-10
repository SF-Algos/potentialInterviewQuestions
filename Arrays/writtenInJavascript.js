// - Merge 2 ordered arrays
function mergeTwoArrays(arr){
  return arr[0].sort().concat(arr[1].sort());
}

mergeTwoArrays([ ['b', 'a'], ['l', 'z', 'y'] ]);

// given an array of integers, find the number that is repeated the most.
function findMostFrequent(arr){
  var repsCount = {};
  for(i=0; i<arr.length; i++){
    if(!repsCount[arr[i]]){
      repsCount[arr[i]] = 1;
    } else {
      repsCount[arr[i]] = repsCount[arr[i]] + 1;
    }
  }
  var occursMore = [];
  for (var key in repsCount){
    if (repsCount[key] > occursMore){
      occursMore.push(key);
    }
  }
  return occursMore;
}
// I'd especially like to see other approaches to this problem, comment if you have a different approach.

// - Find all even numbers in array
function evenOnly(array){
  var onlyEven = [];
  for (i=0; i<array.length; i++){
    if(array[i] % 2 === 0){
      onlyEven.push(array[i]);
    }
  }
  return onlyEven;
}
gina