//arrow function returns a value

// displaying something
let car = () => console.log("maruti");
car();

// takes an argument
let name = (name) => console.log(name);
//name = name => console.log(name);
name("vishnu");

// takes 2 arguments
let sumOf2 = (x, y) => x + y;
sumOf2(2, 3);

// more lines of code
let FatherName = (name) => {
    const surName = "Gautam";
    return name + surName;
};
