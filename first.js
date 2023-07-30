console.log("hello world");

var addFn = require('./add.js');

var c = addFn.fn1(10,20);


let timePartitioning = { 'field' : 'abc', 'type':'hour'};

let expiration_time_in_days = '90';

let expiration_time_in_millis = eval(expiration_time_in_days * 24 * 60 * 60 * 1000);

timePartitioning = {...timePartitioning , 'expirationMs' : expiration_time_in_millis.toString()}

console.log(c + ' ' + expiration_time_in_millis);
console.log(timePartitioning);
