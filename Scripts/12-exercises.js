/*
const add = function(){
  console.log(2+3)
}
add();
add()

function runTwice(fun){
  fun();
  fun();
}

runTwice(function(){
  console.log('12b');
});

runTwice(add);
*/

/*
// Ques 12c and 12d
function changeButton(){
 document.querySelector('.js-12c-button').innerHTML = 'Finished!'
}
document.querySelector('.js-12c-button').addEventListener('click', () => {
  setTimeout(changeButton,2000)
  document.querySelector('.js-12c-button').innerHTML = 'Loading...'
})


//ques 12f
function addPara(){
  let timeOutId;
  const button = document.querySelector('.js-below-button');
  button.innerHTML = 'Added'

  clearTimeout(timeOutId);

    timeOutId = setTimeout(function(){
      button.innerHTML = ''
    }, 2000)
}
document.querySelector('.js-add-to-cart-button').addEventListener('click', addPara); //Event listeners need a reference to a function (like addPara without () or a wrapper like () => addPara()) to delay execution until the event (e.g., a click) occurs.
*/

/*
// ques 12g
setInterval(function(){
  if (document.title === 'App') {
    document.title = '(2) New message';
  }else {
    document.title = 'App';
  }
  
}, 1000)
*/

/*
let message = 2;

function update(){
  if (document.title === 'App') {
    document.title = `(${message}) New message`;
  }else {
    document.title = 'App';
  }
}
setInterval(update,1000)
*/

/*
// ques 12i
let message = 2;
let intervalId;
let isNotification = false;
document.querySelector('.js-12h-add-button').addEventListener('click', () => {
  message++;
  displayNotification();
})

document.querySelector('.js-12h-remove-button').addEventListener('click', () => {
  if (message > 0) {
    message--;
    if (message === 0) {
      stopNotification();
    }
  }
})

displayNotification();

function displayNotification(){
  if(isNotification){ // when you write if (isNotification), it’s asking: "Is the value of isNotification truthy?"
    return;
  }else {
    isNotification = true;
    intervalId = setInterval(function(){
      if (document.title === 'App') {
        document.title = `(${message}) New message`;
      }else {
        document.title = 'App';
      }
      
    }, 1000)
  }
}

function stopNotification(){
  clearInterval(intervalId);
  document.title ='App';

  isNotification = false;
}
*/

/*
// Ques 12j
const multiply = (a, b) => {
  return a*b;
};
console.log(multiply(2,3));
console.log(multiply(7,10));
*/

// Ques 12k
// const multiply = (a,b) => a*b;

// console.log(multiply(2,3));
// console.log(multiply(7,10));

/*
// Ques 12l
function countPositive(nums){
  let count = 0;
  nums.forEach((value) =>{
    if(value > 0){
      count++;
    }
  });
  return count;
}
console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10,0]));
*/

/*
// Ques 12m
function addNum(array,num){
 return array.map(value => value + num) //here I have to return array.map because it is inside a function
}
console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));
*/

/*
// Ques 12n
function removeEgg(foods){
  return foods.filter(value => {
    if (value != 'egg') {
      return true;
    } else {
      return false;
    }
  })
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

//Similar to above code but one-line
function removeEgg(foods){
  return foods.filter(value => value != 'egg')
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
*/

/*
// ques 12n
function removeEgg(foods){
  let removeEgg = 0;
  return foods.filter((value) => {
    if (value === 'egg' && removeEgg < 2) {
      removeEgg++;
      return false;
    } else {
      return true;
    }
  })
}
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
*/


