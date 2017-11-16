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
var myObject = {
    course1: "Javascript1",
    course2: "Javascript2",
    price: 200,
    title: "Intro to Objects"
};

console.log(myObject);
console.log(myObject["course" + a]);
a++;
console.log(myObject["course" + a]);
console.log(myObject.course1);

//Functions
function myFun(a = "default") {
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
var c = 1; //globally declared

function myFunc(a = 3) {
    var c = 100; //locally declared for the function
    c = 100; //changes the global value of the var whitin the function
   // console.log((a * b) + " function was run");
   // console.log(c); //output the locally declared value of var c
    return (a * b);
}

myFunc();
myFunc(4);
myFunc(6);
console.log(c); //output the globally declared value of var c

var d = myFunc(5); // setting it as 50 - a=5 b=10 myFunc=a*b d=50
console.log(d);
d += myFunc(6); // adding 60 --- d=50 myFunc=a*b a=6 b=10 myFunc=a*b=60 d+= (50+60)=110
console.log(d);
d += myFunc(); // adding 30 --- d=110 myFunc=a*b a=3 (from where myFunc was initially declared a=3) b=10 -> myFunc=30
console.log(d);
