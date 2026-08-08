const tips = [
  "Use 'const' and 'let' instead of 'var'.",
  "JavaScript is single-threaded.",
  "Always use strict equality (===).",
  "Arrays in JS are zero-indexed.",
  "Functions are first-class objects in JS.",
  "Arrow functions don't have their own 'this'.",
  "NaN means 'Not a Number'.",
  "Use Array.prototype.map for transforming arrays.",
  "JavaScript is dynamic and weakly typed.",
  "Promises help handle asynchronous code."
];

const randomIndex = Math.floor(Math.random() * tips.length);
console.log("Tip of the day: " + tips[randomIndex]);
let students = [
  { Name: "Dina", Degree: 95 },
  { Name: "Sara", Degree: 85 },
  { Name: "Mona", Degree: 55 },
  { Name: "Omar", Degree: 40 }
];

const topStudent = students.find(student => student.Degree >= 90 && student.Degree <= 100);
console.log("Student with degree 90-100:", topStudent ? topStudent.Name : "None");
console.log("Students with degree less than 60:");
const failedStudents = students.filter(student => student.Degree < 60);
failedStudents.forEach(student => console.log(student.Name));

students.push({ Name: "Ali", Degree: 75 });
console.log("All elements using for...in:");
for (let index in students) {
  console.log(index, students[index]);
}

students.pop();
console.log("All elements using for...of:");
for (let student of students) {
  console.log(student);
}

students.splice(2, 0, { Name: "Hassan", Degree: 92 }, { Name: "Nour", Degree: 88 });

students.splice(4, 1);
let radius = prompt("Enter the value of a circle's radius:");
let area = Math.PI * Math.pow(Number(radius), 2);
alert("Circle Area = " + area);

let number = prompt("Enter another value to calculate its square root:");
let sqrtValue = Math.sqrt(Number(number));
alert("Square Root = " + sqrtValue);
