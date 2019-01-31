/**Q 3 Write a JavaScript program which accept a number 
 * as input and insert dashes (-) 
 * between each two even numbers. 
 * For example if you accept 
 * 025468 the output should be 0-254-6-8?
 */
function insertdashes(){
var readline = require('readline-sync');
number = readline.question("Enter the" +" " +"number\n")
const str = number.toString();
// console.log(str);
const result = [str[0]];
// console.log(result);
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
}
insertdashes();
// // console.log(number);
