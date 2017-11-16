// Variables
var firstName = "Laurence"; // String
var age = 10; // Integer
var boo = false; // Boolean

console.log(age);

age = age + 10;

console.log(age);

// Arrays
var myArray = ["JavaScript", 500, 10, false, "Course"];
console.log("Array item 1 = " + myArray[1]);
console.log("Array item 4 = " + myArray[4]);
myArray[1] = 1000;
console.log("Array item 1 = " + myArray[1]);
myArray.sort();
console.log(myArray);

// Objects
var a = 1;
var myObject = {course1:"Javascript1", course2:"Javascript2", price:200, title:"Intro to Objects"};

console.log(myObject);
console.log(myObject["course"+a]);
a++;
console.log(myObject["course"+a]);
console.log(myObject.course1);

//Functions
function myFun(a="default"){
    // contents of the Function
    console.log(a + " function was run");
    //myFun2();
}

/*function myFun2(){
    console.trace();
}
*/
myFun("a");
myFun("b");
myFun();


var b = 10;
function myFunc(a=3){
    console.log((a * b) + " function was run");
}

myFunc();
myFunc(4);
myFunc(6);
