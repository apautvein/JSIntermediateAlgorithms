function steamrollArray(arr) {
    const resultArray = []; 
    const flatArray = arr.toString(" ").split(","); 
  
  flatArray.forEach(element => {
  
    if(element === '[object Object]') {
      resultArray.push({})
    } else if (parseInt(element)) {
       resultArray.push(parseInt(element));
    } else if (typeof element === "string" && element) {
      resultArray.push(element);
    }
   
  
  });
    return resultArray;
  }
  steamrollArray([1, [], [3, [[4]]]])
  