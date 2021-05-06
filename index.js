function dropElements(arr, func) {
    let fIndex = arr.findIndex(func)
    if(fIndex === -1){
        return [];
    } else {
        return arr.slice(fIndex);
    }
  }
  
  console.log(dropElements([1, 2, 3], function(n) {return n < 1; }));
  
  function dropElements1(arr, func) {
    let fIndex = -1;
    
    for(let i=0; i < arr.length; i++) {
        if(func(arr[i])) {
            fIndex = i;
            break;
        }
    }
    
    if(fIndex === -1){
        return [];
    } else {
        return arr.slice(fIndex);
    }
  }
  
  console.log(dropElements1([1, 2, 3], function(n) {return n < 3; }));
    