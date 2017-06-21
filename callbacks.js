/*  For today's homework your job is to write functions
 *  that make the following invocations work.
 *
 *  Example:
 *
 *  greeting('Hey guys', (message) => {
 *     console.log(message);
 *  });
 *
 *  You would then define the greeting function to make the invocation work.
 *
 *  var greeting = (str, cb) => {
 *    cb(str);
 *  };
 *
 */


// Write a function called firstItem that passes the first item of the given array to the callback function
//alternate answer ES6
//var firstItem = (arr, cb) => cb(arr[0]);

var foods = ['pineapple', 'mango', 'ribeye', 'curry', 'tacos', 'ribeye', 'mango'];

function firstItem (arr,cb) {
	cb(arr[0]);
}

firstItem(foods, (firstItem) => {
  console.log('The first item is ' + firstItem);
});


// Write a function called getLength that passes the length of the array into the callback
//alternate answer ES6
//var getLength = (arr,cb) => cb(arr.length);

function getLength (arr, cb) {
	cb(arr.length);
}

getLength(foods, (length) => {
  console.log('The length of the array is ' + length);
});

// Write a function called last which passes the last item of the array into the callback
//alternate answer ES 6
// var last = (arr,cb) => cb(arr[arr.length]);

function last (arr, cb) {
	cb(arr[arr.length - 1]);
}

last(foods, (lastItem) => {
  console.log('The last item in the array is ' + lastItem);
});


// Write a function called sumNums that adds two numbers and passes the result to the callback
//Alternate Answer ES6
//var sumNums = (num1, num2, cb) => cb(num1 + num2);

function sumNums (num1, num2, cb){
    cb(num1 + num2);
}

sumNums(5, 10, (sum) => {
  console.log('The sum is ' + sum);
});

// Write a function called multiplyNums that adds two numbers and passes the result to the callback
//Alternate Answer ES6
//var multiplyNums = (num1, num2, cb) => cb(num1 * num2);

function multiplyNums (num1, num2, cb){
    cb(num1 * num2);
}

multiplyNums(5, 10, (product) => {
  console.log('The product is ' + product);
});


// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false
//alternate answer ES6
//var contains = (arr, thing, cb) => cb(arr.includes(thing));

function contains (arr, thing, cb) {
	cb(arr.includes(thing));
  }

contains(foods, 'ribeye', (result) => {
  console.log(result ? 'ribeye is in the array' : 'ribeye is not in the array');
});


// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
// Lance's Notes on this problem: the function created checks the array to see what indexof value of the original array's "i" can be returned from the unique array. Since it starts empty (-1 is used for not found) the first item will be pushed to the array, and then the next, until it hits its duplicate value. In that case the indexof will return some value != -1 because it now exists on an index on the unique array. Since this indexof is not -1, the array value will not be pushed to the unique array and therefore only non-duplicate values will be returned when the callback passes into the function call. 

function removeDuplicates(arr, cb) {
  var uniqueArray = []
  for (i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  cb(uniqueArray);
}

removeDuplicates(foods, (uniqueFoods) => {
  console.log('foods with duplicates removed: ' + uniqueFoods);
});


// Write a function called forEach that iterates over the provided array and passes the value and index into the callback.

function forEach(arr, cb) {
	for (i = 0; i < arr.length; i++){
  	var val = arr[i];
    var ind = i;
    cb(val, ind);
  }
}

forEach(foods, (value, index) => {
  console.log(value + ' is at index ' + index);
});
