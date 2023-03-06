// Comments
const test = 10; // Constant
let age = 30; // Number Literal
let isApproved = false; // Boolean
let firstName = undefined;
let name = "levis"
console.log(name, test);
let selectedColor = null;

// Primitives/ Values Types
/*
- String
- Number
- Boolean
- undefined
- null
 */


// Reference types
/*
- Object
- Array
- Function
 */


// ================ Arrays =======================
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors[0]);
console.log(selectedColors[2]);
console.log(selectedColors.length);

// ================ Functions =======================
// Parameters are the one passed to the function
function great(name) {
    // body of the function
    console.log("Test" + name);
    return "Test"; // if you have something to return
}
// Arguments are the one passed to the function at calling time
great("Levis");

// ================ Operators =======================

// ================ Control flow =======================
let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log("Good Morning");
}else if ( hour >= 12 && hour < 18){
    console.log("Good Afternoon");
} else {
    console.log("Good night");
}
// ================ Switch case =======================
let role = 'guest';
switch (role){
    case 'guest':
        console.log("User Guest");
        break
    default:
        console.log("Unknown User");
}

// ================ For =======================
// Only use if we know the number of time we need to loop
for(let i=0; i < 5; i++){
    console.log("Hello World!")
}

// ================ While =======================
// Use only when we don't know the number of time we need to loop
let i = 0;
while(i<= 5){
    if (i % 2 !== 0) console.log(i);
    i++;
}
// ================ Do while =======================
// Use when we need to execute one action first before entering the loop
let i = 0
do {
    if (i % 2 !== 0) console.log(i);
    i++;
} while (i <= 5);

// ================ For in =======================
let person = {
    name: "Levis",
    age: 30
};

for(let key in person){
    console.log(key, person[key]);
}
// ================ For of =======================

const colors = ['red', 'green', 'blue']
for (let color of colors)
    console.log(color);

// NB: Remember, Break and continue can change the behavior of the loop

// ================ Objects =======================
let person = {
    name: "Levis",
    age: 30
};

console.log(person);
// Dot notation
person.name = "John";
// Bracket notation
let selection = 'test';
person[selection] = "Mary";
console.log(person.name);

// The factory function
/*
Instead of creating the same logic in different function, we can create that logic
in one factory function and then use it multiple times
 */
function createCircle(radius){
    return{
        radius,
        draw() {
            console.log("Hello");
        }
    }
}
const circle1 = createCircle(1);
circle1.draw();
const circle2 = createCircle(10);
circle2.draw();

// The constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const circle = new Circle();
delete Circle.name;// To delete a member

// Enumerating Properties of an objects
 for (let key of Object.keys(circle)){
     //.....
 }
for (let entry of Object.entries(circle)){
    //.....
}

// Clone an Object
const another = {...circle};
