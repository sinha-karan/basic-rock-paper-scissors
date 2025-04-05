// const nums = [10,20,30];
// nums[2] = 99;
// console.log(nums);


// const getLastValue = [1,20,22,24,5];
// console.log(getLastValue[4]) ;


/*
function arraySwap(array){
  let temp = array[0];
  array[0] = array[array.length -1];
  array[array.length-1] = temp;
  return array;
}
console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hey', 'hi', 'hello']));
*/


// for(let i = 0; i <= 10; i+=2){
//   console.log(i);
// }


// for (let i = 5; i >= 0; i--){
//   console.log(i);
// }


// let i = 0;
// while(i <= 10){
//  console.log(i);
//  i += 2;
// }


// let i = 5;
// while(i >= 0){
//   console.log(i);
//   i--;
// }

// let arr = [1,2,3];
// let arr2 = [];
// let i = 0;
// while(i < arr.length){
//   arr2.push(arr[i]+1);
//   i++;
// }
// console.log(arr2);


// function addOne(array){
//   for(let i = 0; i < array.length; i++){
//     array[i] += num;
//   }
//   return array;
// }
// console.log(addOne([1,2,3]));
// console.log(addOne([-2,-1,0,99]));


// function addOne(array , num = 1){
//   for(let i = 0; i < array.length; i++){
//     array[i] += num;
//   }
//   return array;
// }
// console.log(addOne([1,2,3],2));
// console.log(addOne([-2,-1,0,99]));


// function addOne(array , array2){
//   for(let i = 0; i < array.length; i++){
//     array[i] += array2[i];
//   }
//   return array;
// }
// console.log(addOne([1,2,3],[1,2,1]));


// function countPositive(nums){
//   let cnt = 0;
//   for(let i = 0; i < nums.length; i++){
//     if (nums[i] > 0) {
//       cnt++;
//     }
//   }
//   return cnt;
// }
// console.log(countPositive([1,-3, 2]));
// console.log(countPositive([-2,-3, 5,7,10]));


//minmax question with O(n^2)
// function minMax(nums){
//   let max = 0;
//   let min = 0;
//   for(let j = 0; j < nums.length; j++){
//     for(let i = 0; i < nums.length; i++){
//       if(nums[j] > nums[i]){
//         max = nums[j];
//       }
//       if(nums[j] < nums[i]){
//         min = nums[j]
//       }
//     }
//   }
//   return {min,max}
// }
// console.log(minMax([1,-3,5]))


// minmax question with O(n)
// function minMax(nums) {
//   if (nums.length === 0) return {min: null, max: null};
//   let max = nums[0];
//   let min = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) max = nums[i];
//     if (nums[i] < min) min = nums[i];
//   }
//   return { min, max };
// }
// console.log(minMax([1,-3,5,-2,7]));
// console.log(minMax([3]));

// function countWords(words){
//   let result = {
//     apple: 0,
//     grapes: 0
//   }
//  for(let i = 0; i< words.length; i++){
//     if(words[i] === 'apple'){
//       result.apple++;
//     }else{
//       result.grapes++;
//     }
//   }
//   return result;
// }

// console.log(countWords(['apple','grapes', 'apple', 'apple']));

/*
function countWords(words){
  const result = {};

  for(let i = 0; i < words.length; i++)
  {
    const word = words[i];

    if(!result[word]){
      result[word] = 1;
    }
    else{
      result[word]++;
    }
  }
  return result;
}

console.log(countWords(['apple','grapes', 'apple', 'apple']));
*/

// const array = ['hello', 'world', 'search', 'gold'];

// for(let i = 0; i < array.length; i++){
//   if(array[i] === 'search') console.log(i);
//   else console.log(-1);
// }

/*
//Another Approach
let array = ['hello', 'world', 'search', 'gold'];
let index = -1;

for(let i = 0; i < array.length; i++){
  if(array[i] === 'search') index = i;
}

console.log(index);

array = ['not', 'here'];
index = -1;

for(let i = 0; i < array.length; i++){
  if(array[i] === 'search') index = i;
}
console.log(index);
*/

/*
let array = ['hello','search', 'world', 'search', 'gold'];
let index = -1;

for(let i = 0; i < array.length; i++){
  if(array[i] === 'search'){
    index = i;
    break; 
  } 
}
console.log(index);
*/

/*
function findIndex(array, word){
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      return i; 
    }
  }
  return -1;
}

console.log(findIndex(['hello','search', 'world', 'search', 'gold'],'search'))
*/

// function removeEgg(foods){
//   for(let i = 0; i < foods.length; i++){
//     if(foods[i] === 'egg'){
//       foods.splice(i , 1);
//       i--;
//     }
//   } 
//   return foods;
// }

// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

/*
Above code Explanation
Step-by-Step Execution
Let’s walk through the code with the input ['egg', 'apple', 'egg', 'egg', 'ham']:

Initial Array: ['egg', 'apple', 'egg', 'egg', 'ham']
  Length: 5
  i = 0
  Check: foods[0] === 'egg' → True
  Action: foods.splice(0, 1) removes 'egg' at index 0.
  New Array: ['apple', 'egg', 'egg', 'ham']
  New Length: 4
  Adjust: i-- → i = 0 - 1 = -1
  Increment: i++ (end of loop iteration) → i = -1 + 1 = 0
Second Iteration: Array is now ['apple', 'egg', 'egg', 'ham']
  i = 0
  Check: foods[0] === 'egg' → False (it’s 'apple')
  Action: None
  Increment: i++ → i = 1
Third Iteration: Array is still ['apple', 'egg', 'egg', 'ham']
  i = 1
  Check: foods[1] === 'egg' → True
  Action: foods.splice(1, 1) removes 'egg' at index 1.
  New Array: ['apple', 'egg', 'ham']
  New Length: 3
  Adjust: i-- → i = 1 - 1 = 0
  Increment: i++ → i = 0 + 1 = 1
Fourth Iteration: Array is now ['apple', 'egg', 'ham']
  i = 1
  Check: foods[1] === 'egg' → True
  Action: foods.splice(1, 1) removes 'egg' at index 1.
  New Array: ['apple', 'ham']
  New Length: 2
  Adjust: i-- → i = 1 - 1 = 0
  Increment: i++ → i = 0 + 1 = 1
Fifth Iteration: Array is now ['apple', 'ham']
  i = 1
  Check: foods[1] === 'egg' → False (it’s 'ham')
  Action: None
  Increment: i++ → i = 2
Loop End:
  Condition: i < foods.length → 2 < 2 → False
  Exit loop
  Return: ['apple', 'ham']
*/

// function removeEgg(foods){
//   let eggRemove = 0
//   const result = [];
//     for(let i = 0; i < foods.length; i++){
//       if(foods[i] === 'egg' && eggRemove < 2){
//         eggRemove++;
//         continue;
//       }
//       result.push(foods[i]);
//     } 
//     return result
//   }
  
//   console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


// function removeEgg(foods){
//   const arr = foods.slice();
//   const array1 = arr.reverse()
//   let eggRemove = 0
//   const result = [];
//     for(let i = 0; i < foods.length; i++){
//       if(arr[i] === 'egg' && eggRemove < 2){
//         eggRemove++;
//         continue;
//       }
//       result.push(arr[i]);
//     } 
//     console.log(foods)
//     return result.reverse();
//   }
//   console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));


// for(let i = 1; i <= 20; i++){
//   if(i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
//   }else if(i % 3 === 0){
//     console.log('Fizz');
//   }else if( i % 5 === 0){
//     console.log('Buzz');
//   }else{
//     console.log(i);
//   }
// }


function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
    }
  }

  return -1;
}

function unique(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const word = array[i];

    // Using the findIndex() function from above, we
    // can check if the string is already in the
    // result array. If it's not in the result array
    // (index is -1), then add it to the result array.
    if (findIndex(result, word) === -1) {
      result.push(word);
    }
  }

  return result;
}

console.log(unique(['green', 'red', 'blue', 'red']));
console.log(unique(['red', 'green', 'green', 'red']));

