/*
Challenge Question 1

We learned about relational operators and how they can classify the relationship between two values. Your job is to write the function getRelationship(x,y) function, which should return a string representing whether x is >, < or = y. For example:

var rel = getRelationship(2, 3);
console.log(rel); // <
If one or both of the values aren't numbers, your function should output:

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
where [this value] and [that value] are replaced with the non-numerical values. The sentence should be grammatically correct by outputting either is or are and pluralizing number if necessary.

For example:

var rel1 = getRelationship("this", 2);
console.log(rel1); // "Can't compare relationships because this is not a number"

var rel2 = getRelationship("that");
console.log(rel2) // "Can't compare relationships because that and undefined are not numbers"
Notice in the second example, because the y value was missing, the output said that undefined was not a number.

Adapted from UVa problem 11172.
*/

/*
######
My First solution
######

function getRelationship(x, y) {
    if(x === null && isNaN(x) === false){x = 'undefined';}
    if(y === null && isNaN(y) === false){y = 'undefined';}
    if((typeof x !== "number" || isNaN(x)) && (typeof y !== "number" || isNaN(y))) {
        return "Can't compare relationships because " + x + " and " + y + " are not numbers";
    }
    else if(typeof x !== "number" || isNaN(x)){
        return "Can't compare relationships because " + x + " is not a number";
    }
    else if(typeof y !== "number" || isNaN(y)){
        return "Can't compare relationships because " + y + " is not a number";
    }
    else {
        if(x > y){
            return ">";
        }
        else if(x < y){
            return "<";
        }
        else {
            return "=";
        }
    }
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));
*/

/*
######
My SECOND solution (trying to satisfy the rubric)
######
*/

/*
Compare two variables and if numbers then provide their
greater than or less than relationship. If not numbers
then provide error.
*/
function getRelationship(x, y) {  
    // Error handling
    // Added this to satisfy the "extra functions" part of rubric
    // This makes it more modular
    function nonNumberError(errorType, nonNumber1, nonNumber2) {
        var errorString = "Can't compare relationships because ";
        if (errorType === 'single') {
            return errorString += nonNumber1 + " is not a number";
        }
        else {
            return errorString += nonNumber1 + " and " + nonNumber2 + " are not numbers";
        }
    }
    
    //Manage any missing and non-NaN variables
    if(x === null && isNaN(x) === false){x = 'undefined';}
    if(y === null && isNaN(y) === false){y = 'undefined';}
    
    // Generate warning messages for non-numbers
    if((typeof x !== "number" || isNaN(x)) && (typeof y !== "number" || isNaN(y))) {
        return nonNumberError('double', x, y);
    }
    else if(typeof x !== "number" || isNaN(x)){
        return nonNumberError('single', x);
    }
    else if(typeof y !== "number" || isNaN(y)){
        return nonNumberError('single', y);
    }
    // Looks like a number now provide relationship
    else {
        if(x > y){
            return ">";
        }
        else if(x < y){
            return "<";
        }
        else {
            return "=";
        }
    }
}

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));

