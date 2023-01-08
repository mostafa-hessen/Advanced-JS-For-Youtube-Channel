class Person{
  
    constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      show()
      {
        console.log(this.name+" " +this.age)
      }
}
class Employee extends Person
{}
// Es6 Es.next

var person=new Person("ahmed",23)
var emp=new Employee()
console.log(emp)
person.show()

// var x=10;
// var x=20;
// console.log(x);

// let x=10
// let x=10
// console.log(x);
// console.log(x);