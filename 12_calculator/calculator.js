const add = function(a,b) {
     return a + b;
};

const subtract = function(a,b) {
	return a - b ;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(element => {
    sum = sum + element;
    
  });
  return sum;
};

const multiply = function(array) {
  let multiple = 1;
  array.forEach(element => {
    multiple = multiple * element ;
    
  });
  return multiple;

};

const power = function(a,b) {
  let finalanswer = 1 ;
  for ( let i = 0 ; i < b ; i++)
  {
    finalanswer = finalanswer * a ;
  }
  return finalanswer;
	
};

const factorial = function(a) {
 let fact = 1;
 for ( let i = a ; i > 1 ; i--)
 {
  fact = fact * i ;
 }
  return fact;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
