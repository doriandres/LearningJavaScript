/**
 * What is a variable?
 * 
 * A variable is a an space in memory used to store data.
 */

/**
 * How to create a variable?
 * 
 * 1. Understand what does the data you want to store mean?
 * 2. Get an appropiate name so others can identify it easily
 * 3. In a new line, put the "var" keyword before the name of
 * the variable separated by an space " " then use the equals
 * symbol "=" to point to the data you want to store.
 * 
 * Remember to put a semicolon ";" at the end of all your statements
 */

var myVariable = 3;

/**
 * 
 * Types of variables
 * 
 * The most basic variable is declared using the keyword "var"
 * but JavaScript has 2 more kinds of variables:
 * 
 * "let" : It works pretty similar to var, the main difference is that
 * a "let" variable will be kept in memory only within is declarative
 * scope, a variable declared using "var" remains everywhere but outside
 * of function bodies.
 * What does it mean?
 * Imagine you have a code like this...
 */


{ // Main scope starts

    let a = 1; // a is a "let" variable so it will remain withing the whole main scope

    if (a < 2) { // truthy if scope starts

        a = 4; // I can change a "let" variable after it's declaration

        let b = a + 1; // a keeps existing here, but b is declared using "let" inside the scope of the truthy if

        console.log(b); // b is reacheable here

    } // truthy if scope ends
    else { // falsy if scope starts 

        var c = a + 2; // c is declared using "var", it will remain outside of its scope but outside it's parent function scope

        console.log(c); // c is reacheable here

    } // falsy if scope ends

    console.log(b); // b is no longer reacheable here
    console.log(c); // c could be reached here if the falsy if scope was executed

} // Main scope ends

/** 
 * The other type of variable is "const", it works very similar to "let" with
 * the scopes but, when a variable is declared using const it can't be changed
 * anymore
 * 
 */


 const myVarCannotChange  = 'Hello!';

 myVarCannotChange = 'Good bye!' // This will throw an error!


/**
 * Why would someone use a variable that can't be changed?
 * 
 * This kind of variables are really useful actually, you can use them
 * for declaring configurations for your application for example the 
 * domain url of an API, this is something you don't want to change, and
 * you may also want to be avoid any modification a process could make to it.
 * 
 * This is like in Math, imagine that the number PI is changed by a scientist
 * by mistake so all calcultors get the wrong PI value and because of that
 * everything does not fit and fails!
 * 
 * If we get a little bit deeper, "const" variables are cheaper for the
 * browser, because once they're declared, the browser doesn't have to keep
 * worrying about any kind of updates in memory for that, so if you have a
 * variable that won't change use a "const" and keep your app optimized!
 */