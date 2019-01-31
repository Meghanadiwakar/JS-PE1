/**Q 14. Consider the following object:
var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
Exercise 1: Display all objects with occupation as 'Programmer'
Exercise 2: Sort the object basis the age key in the descending order
Exercise 3: Recreate the above array of objects into the following 
object of objects :{ 'Team Leader' : [{'name':_____________, 'age':__________},{}],
'<anotheroccupation>': [{'name':______________, 'age':________},{}]}
Exercise 4: Use the map function to create a new array containing only names present in myObj.
 */

var myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];
for(var i=0;i<myObj.length;i++){
   if(myObj[i].occupation=="Programmer")
   {
       console.log(myObj[i]);
   }
}
myObj.sort(compare);
function compare(a,b){
   return b.age-a.age;
}
console.log(myObj);
var teamLeader=[];
var anotherOccupation=[];
for(var i=0;i<myObj.length;i++){
   if(myObj[i].occupation=="Team Leader")
   {
       teamLeader.push(myObj[i]);
   }else{
       anotherOccupation.push(myObj[i]);
   }
}
console.log(teamLeader);
console.log(anotherOccupation);
// function findNames(a){
//     var names=[];
//     for(var i=0;i<a.length;i++)
//     names.push(a[i].name);
//     return names;// }// console.log(findNames(myObj));
var n = myObj.map(function(obj) {
   return obj.name;
 });
console.log(n);
    