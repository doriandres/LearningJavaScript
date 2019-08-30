/**
 * What is deconstruction?
 * 
 * Deconstruction or unpack is a way to declare variables extracting
 * properties of an object or elements of an array
 */

var user = {
    name : "Andres"
}
/**
 * This extracts the "name" property from user object and 
 * declares a variable named "name" with the value of the property
 */ 
var { name } = user;

// This can also be done using multiple properties and creating multiple variables

var client = {
    phone : '8888-8888',
    email : "client@mail.com",
    country : "Costa Rica"
}
var { phone, email } = client; // Notice that you're free to extract only the properties you want

// You can also rename the variable

var { country : pais } = client; // Extracts country but defines it as a variable named "pais"




// You can also use deconstructions with arrays

var friends = ["Gary", "Nati", "Hector"];

// I can get the first friend like this
var [firstFriend] = friends;

console.log(firstFriend);
// "Gary"

// You can get multiple values
var [bestFriend, secondBff] = friends;
console.log(bestFriend);
// "Gary"
console.log(secondBff);
// "Nati"

// What about if I want to skip an item? 

var [, secondBff, thirdBff] = friends;
console.log(secondBff);
// "Nati"
console.log(thirdBff);
// "Hector"

// What about if I want to skip many items? 
var [,, bebe] = friends;
console.log(bebe);
// "Hector"