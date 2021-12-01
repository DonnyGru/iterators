//Old style: Loops
const colors = ["yellow", "blue", "red", "orange"];

//While loop
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
};

//For loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

//New style: array methods
colors.forEach((color) => console.log(color));

//1. For loop takes 3 lines, While loop takes 5 lines
//2. forEach method takes one line only!
//3. forEach is easier to read, you can understand the purpose from the name.
//   Dont need to use i anymore, that saves space.
//4. 
const names = {
    name1: "Tom",
    name2: "Lisa",
    name3: "John",
    name4: "Sarah",
    name5: "Bob",
  };
  
  for (y in names) {
    console.log(names[y]);
  };
 // Thats iteration, for loop. Array methods are not possible on objects