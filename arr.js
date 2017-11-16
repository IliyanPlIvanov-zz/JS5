var myArray = ["one", "two", 3, 4, "five", "six", 7, 8, 9];
console.log(myArray.sort());
console.log(myArray.reverse());

myArray.push("ten");
console.log(myArray);
myArray.pop();
console.log(myArray);
var a = myArray.shift();
console.log(a);
console.log(myArray);
myArray.unshift("ten");
console.log(myArray);
myArray.splice(0, 2);
console.log(myArray);
myArray.splice(3, 0, "added 1", "added 2");
console.log(myArray);
