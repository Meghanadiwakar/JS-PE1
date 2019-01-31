/* Write a JavaScript program to display the current day and time in the following format mm/dd/yyyy?
*/

function displaydayandtime(){
    //get todays date
    var todaysdate = new Date;
    var date = todaysdate.getDate();
    var month = todaysdate.getMonth()+1;
    var year = todaysdate.getFullYear();
//get todays time
var hour = todaysdate.getHours();
var min = todaysdate.getMinutes();
var sec = todaysdate.getSeconds();
// //get todays day
// var day = todaysdate.getDay();
//display date in dd/mm//yy format
console.log(date+"/"+month+"/"+year);
// console.log(day);
console.log(hour+":"+min+":"+sec);
}
displaydayandtime();