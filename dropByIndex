function dropElements(arr, func) { 
  const startingIndex = arr.findIndex((element) => func(element))
  if (startingIndex >= 0) {
     return arr.slice(startingIndex);
  }
    return []; 
 
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});