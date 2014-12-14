/*
Challenge Question 2

Twelve people have walked on the Moon. They are:

Neil Armstrong
Buzz Aldrin
Pete Conrad
Alan Bean
Alan Shepard
Edgar Mitchell
David Scott
James Irwin
John W Young
Charles Duke
Eugene Cernan
Harrison Schmitt
You'll notice that these names are listed in the order that they first stepped on the Moon, not alphabetical order. To alphabetize them, it would make sense to write their names as lastname, firstname. For example: Neil Armstrong becomes Armstrong, Neil.

Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing strings of names and returns an alphabetized array of names in lastname, firstname format.
*/

/*
######
My First solution
######

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    var lastFirst = [];
    for(var walker in names){
        var nameArray = names[walker].split(" ");
        if (nameArray[2]){
            lastFirst.push(nameArray[2] + ", " + nameArray[0] + " " + nameArray[1]);
        }
        else {
            lastFirst.push(nameArray[1] + ", " + nameArray[0]);
        }      
    }
    
    var sortedArray = lastFirst.sort(ingnoreCase);
    function ingnoreCase(a,b) {
        // alphabetical ignore case
        if (a.toUpperCase() > b.toUpperCase()) { return 1;}
        if (b.toUpperCase() > a.toUpperCase()) { return -1;}
        return 0;
    }
    
    for(var sorted in sortedArray) {
        //testing
        //console.log(sortedArray[sorted]);
    }
    names = sortedArray;

    return names;
}

// Try logging your results to test your code!
//console.log(alphabetizer(moonWalkers));
*/

/*
######
My SECOND solution (trying to satisfy the rubric)
######
*/

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

/* Function to take in an unsorted list of names then
converted it to last name first and sprt it alphabetically
ignoring the upper/lower case. Also wrote this to deal 
with middle initials incase Mr. Young's middle initial
shows up again.
*/
function alphabetizer(names) {
    var lastFirst = [];
    // Make last name first
    for(var walker in names){
        var nameArray = names[walker].split(" ");
        // Adjust for middle initial
        if (nameArray[2]){
            lastFirst.push(nameArray[2] + ", " + nameArray[0] + " " + nameArray[1]);
        }
        // First and last only
        else {
            lastFirst.push(nameArray[1] + ", " + nameArray[0]);
        }      
    }
    
    //Sort the new array. Need function to ignore case.
    var sortedArray = lastFirst.sort(ingnoreCase);
    function ingnoreCase(a,b) {
        // alphabetical ignore case
        if (a.toUpperCase() > b.toUpperCase()) { return 1;}
        if (b.toUpperCase() > a.toUpperCase()) { return -1;}
        return 0;
    }
    
    // Used while testing
    for(var sorted in sortedArray) {
        //console.log(sortedArray[sorted]);
    }
    
    // overwrite old data
    names = sortedArray;

    // return newly sorted data
    return names;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));
