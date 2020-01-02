'use strict'

/* 
  Simple callbacks examples
*/

function sum (a, b) {
  return a + b
}

function calc(a, b, callback) {
  return callback(a, b)
}

console.log(calc(2, 2, sum))

function date (callback) {
  console.log(new Date)
  setTimeout(() => {
    callback(new Date)
  }, 3000);
}

function printDate (newDate) {
  console.log(newDate)
}

date(printDate)
