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

// 3.

function isACharAVowel(q){
    let vowels = 'aeiouy';
    return(vowels.indexOf(q) > -1);
}

console.log(isACharAVowel('o'));

//4.
const arrayExample = [1,2,3]
let sum = 0;

/*function sumArray(arr){
    arr.forEach(function(p){
        sum += p;
    })

    return sum;
}
*/

const sumArray = function(array){
    array.forEach(function(p){
        sum += p;
    })
    
    return sum;
}

console.log(sumArray(arrayExample));

//5.

function multiplyArray(array){
    let sumOne = 1;
    array.forEach(function(i){
        sumOne *= i;
    })
    return sumOne;
}
console.log(multiplyArray([2,2,3]));



