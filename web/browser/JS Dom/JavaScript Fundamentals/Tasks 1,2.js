// Task 1: Create and manipulate different data types
let numberExample = 42;
let stringExample = 'Hello World';
let objectExample = { name: 'John', age: 25 };

// Your task: Create an array of objects representing students
// Each object should have: name, grade, and isActive properties

class Student {
    constructor(name, grade, isActive) {
        this.name = name;
        this.grade = grade;
        this.isActive = isActive;
    }
}

let student1 = new Student("Peter", 1, true);
let student2 = new Student("Bjorn", 2, true);
let student3 = new Student("John", 3, false);

let students =[]

students.push(student1)
students.push(student2)
students.push(student3)
students.push(new Student("Kenny", 3, true))

console.log(students)


// Task 2: Practice array manipulation
const numbers = [1, 2, 3, 4, 5];
numbers.map(num => num * 2);

// Your task: Create a function that filters out all negative numbers
// and doubles the positive ones

let numbersArr = [1,2,-3,4,-5,6,7,-8,9]
function filterArray(arr) {
    return arr
        .filter(num => num > 0)
        .map(num => num * 2);
}

console.log(filterArray(numbersArr))