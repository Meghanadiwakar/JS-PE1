/*Q 5 Write a JavaScript program to remove duplicate items from an array?
*/

function original(){
const names = ['mango', 'berry', 'apple', 'mango', 'grape'];
let unique = [...new Set(names)];
console.log(unique);
}
original(); 