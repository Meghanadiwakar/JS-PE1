/**Q 2 Write a JavaScript conditional statement to find the largest of five numbers?
 */

function largestOfNumbers() {
var readline = require('readline-sync');
    var number = [];
    for (var index = 0; index < 5; index++) {
        number[index] = readline.question("Enter the" + " " + (index + 1) + " " + "number\n")
    }
    //return (Math.max(...number));
    var largest = 0;
    number.forEach(function (item) {
        if (item > largest) {
            largest = item;
        }
    })
    return largest;
}
console.log("Largest of all numbers is" + ":" + largestOfNumbers());
// largestOfNumbers();


// var userInput = readline();
// console.log("User input: " + userInput);

