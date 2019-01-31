/*Q 15 Convert the following JSON string to an object and access the value of the jason property.
var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
 */


var jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';
var obj = JSON.parse(jsonStr);
// console.log(obj);
console.log(obj["jason"]);