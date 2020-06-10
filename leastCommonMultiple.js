function smallestCommons(arr) {
    const sorted = arr.sort((a, b) => a - b);
    console.log(sorted) 
    const numberRange = []; 
    let isLCM = false; 
    for (let i = sorted[0]; i <= sorted[1]; i++) {
        numberRange.push(i);
    }
  let startingNumber = sorted[1]; 
  while (!isLCM){
    
   if (numberRange.every(number => startingNumber % number ===0)) {
     isLCM = true; 
   } else {
     startingNumber++; 
   }
  }
  console.log(startingNumber)
    return startingNumber;
  }
  
  
  smallestCommons([2, 10]);