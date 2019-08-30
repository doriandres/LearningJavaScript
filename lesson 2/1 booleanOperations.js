/**
 * There're some boolean operations, they are the base for the existence
 * of computers, they are:
 * AND: This is used to check if the state of all the boolean items is true
 * OR: Used to check if any state of the boolean items is true
 * NOT: Used to toggle the state of a boolean item
 */

/**
 * AND
 * 
 * In JavaScript is denoted using double ampersan "&&"
 * 
 */

var a = true;
var b = false;
var c = true;

var d = a && b; // false
var e = a && b && c // false
var f = a && c // true

// Remember all must be "true" to return "true"

/**
 * OR
 * 
 * Is denoted using double pipe "||"
 * 
 */

var g = a || b; // true
var h = b || d; // false
var i = b || h || g; // true

// Remember any must be "true" to return "true"

/**
 * NOT
 * 
 * Is denoted using exclamation "!" before the variable
 */

var j = !a; // false
var k = !b // true;
var l = !!a; // true, double toggle it keeps its boolean state, it like canceling common factor in math


// What about mixing them?
/**
 * It can be tricky, but you may need it, so just remember that the computer will
 * evaluate first ! then && and finally ||
 */