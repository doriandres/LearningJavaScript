/**
 * What is a data type?
 * 
 * Variables can store data, but such as there are types of variables
 * there also exist types of data, a data type defines how the data
 * stored in memory is being understood and handled by a computer.
 * 
 * Data types are divided into 2 groups in JavaScript
 * - Primitives
 * - Structures
 * 
 * 
 * Primitive Data types
 * - Boolean: The most basic data type, it has a binary value 1 or 0 which
 *            is represented using the values "true" or "false" 
 */ 
 
 var truthy = true;
 var falsy = false;

 /** - Number: This data types is related with all kinds of numeric values, positives,
 *           negatives, integers or decimals, even infinity.
 */ 

 var negative = -5;
 var int = 10;
 var decimal = 8.54;

 /** - String: Is used to represent text, is declared using '', "" and `` */
 
var name = "Andres";
var lastName = 'Cortes';
var surname = `Gonzalez`;


 /** Structure Data types
 * - Object: An object is like a container for a set of data, all these data is
 *           binded to the object using properties, properties are like variables
 *           that can be acceded through the object's name, such as variables
 *           properties can have names to identify them.
 * 
 * For declaring an object you must always use curly brackets
*/


var obj = {}; // Most basic object, it does not have any properties

var person = { // property "name" with String value "Andres"
    name : 'Andres' // Notice that instead of equals "=" it uses colon ":" to assign a value
};

console.log(person.name); // I can read the property using a dot "." between the object and the property name

var employee = { // Object with multiple properties
    name : "Gary",  // Notice that between property definitions, you must put a coma ","
    age : 22 
};

console.log(employee.name);
console.log(employee.age);


var human = { 
    name : "Jesus", 
    parent : { // I can have nested objects too!
        name : "Joseph" 
    }  
}

// I can reach the name of the parent just like this
console.log(human.parent.name);


// You can  assign a property using a variable
var team = "Barcelona";
var striker = {
    name: "Messi",
    team : team // This declares a team property and assigns the value of the "team" variable
};

// You can also use the inferenced property declaration

var defender = {
    name : "Pique",
    team // Since we want to declare a property with name "team" using a variable called "team" we can just put it like so and JavaScript will understand
};


/** - Array: An array or list, is an special object that uses numbers to identify
 *          its properties, each element added to the list creates or replaces a property
 *          into the array, arrays have multiple have multiple functions to interact
 *          with them to add, remove, replace, or get data from them.
 * 
 * To declare an Array use square brackets
*/

var emptyList = [];

var friends = [
    "Gary", // Such as with objects, items must be separated using a colon ","
    "Nati", 
    "Hector"
];

// To add an item to a list you can use the function "push"

friends.push("Allan");
console.log(friends);
/**
[
    "Gary",
    "Nati", 
    "Hector",
    "Allan"
]
*/

// To access an specific item use its index, the index starts at 0, so if you want the first use 0

console.dir(friends[0]);
// "Gary"

console.dir(friends[1]);
// "Nati"


// To get the amount of items stored by the array use the "length" property
console.dir(friends.length);
// 4

/* 
   To remove an item from the list use the function "splice"
   splice takes 2 parameters, the first indicates the starting position of the delete
   the second indicates the amount of elements to delete

   So if I would like to remove "Hector" which is at index 2, I would do something like this:
*/

friends.splice(2, 1); // I want to remove only "Hector" so the second parameter is 1

console.dir(friends.length);
// 3

console.log(friends);
/**
[
    "Gary",
    "Nati",     
    "Allan"
]
*/

// How to know the index of a data?
var index = friends.indexOf("Allan");

console.log(index);
// 2

// If the array does not contains the data you asked for it will return -1










