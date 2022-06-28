function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}

// Person.nationality = "Indian"; - it will will show undefined
Person.prototype.nationality = "Indian"; // we can basically add a new property using prototype
// the prototype accesses the object associated with the object Person
// adding a new method
Person.prototype.name = function(){
    return this.firstName + ' ' + this.lastName;
}
const myFather = new Person("Vishnu", "Gautam");
console.log(myFather.nationality);
console.log(myFather.firstName);
console.log(myFather.name());