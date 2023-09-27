// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
         return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.

  function maxOfThree(x, y, z){
    if((x > y) && (x > z)){
        return x;
    } else if ((y > x) && (y>z)){
        return y;
    } else if ((z > x) && (z > y)){
        return z;
    }
  }

  console.log(maxOfThree(5,2,3));