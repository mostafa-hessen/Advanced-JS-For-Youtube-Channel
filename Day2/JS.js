// //Function 
// function print() {
//     console.log("welcome")
// }

// //Constructor Function 
// var arr = []
// var arr1 = new Array()

// console.log(arr1)
// Student std=new Student()   ==> std object/instance from class student

// function Student(name,age)  //constructor function
// {
//     //member variables
//     this.name = name
//     this.age = age

//     //member functions
//     // this.show = function () {
//     //     console.log(this.name + " " + this.age)
//     // }

//     // return {
//     //     Name: this.name,
//     //     Age: this.age
//     // }
// }

// Student.prototype.show=function () {
//     console.log(this.name + " " + this.age)
// }

// var std = new Student("Ali",33)   //new ==> Ref. to Object
// std.salary = 2000
// // std.print=function(){alert("")}
// std.show()
// console.log(std)

// x=3
// // var x , let x , const x

// console.log(x)
// console.log(window)
// window.x=3


// var std1=new Student("Mona",22)
// var std2=new Student("Ali",24)
// var std3=new Student("Ahmed",22)
// console.log(std1)
// console.log(std2)
// console.log(std3)



// var obj={}

// Object.defineProperties()
//Data Decspritor
// Object.defineProperty(obj, 'name', {
//     value: "nawal",
//     writable:false ,   // defualt False
//     configurable:true,
//      enumerable:true
//   });


//Accesor Data
// Object.defineProperty(obj,'name', {
//     get:function(){
//         return obj.name
//     },
//     set:function(){
//         obj.name="gggg"
//     }
//   });


// obj.name="Minia"  //set Property
// console.log(obj)

// delete obj.name
// var x=3
// delete x




//Inhertance
function Person(name,age)
{
    this.name=name
    this.age=age
    if(this.constructor==Person)
    {
        throw("Person is Absract Class")   //Absract Class
    }
}
Person.prototype.show=function()
{
    // console.log(this.name+" "+this.age)
     console.log("I am Person")
}


function Employee(name,age=0,salary=0)
{
    // if(!name)
    // {
    //     throw("you must enter Name of Employee")
        
    // }
    // this.name=name
    // this.age=age

    Person.call(this,name,age)
    this.salary=salary
    var x=20  //private Member
    this.getX=function (){
        return x
    }
    this.setX=function(val)
    {
        x=val
    }
}
// Employee.prototype.show=function()
// {
//     console.log(this.name+" "+this.age)
// }
 //Employee.prototype=Person.prototype
Employee.prototype=Object.create(Person.prototype)
Employee.prototype.constructor=Employee
//Override  function
Employee.prototype.show=function(){
    console.log("I am Employee")
}
Employee.prototype.calcSalary=function()
{
    console.log(this.salary*30)
}

//Static Function ===> function ===> calling by Class name
Employee.test=function(){
    console.log("I am test")
}
function Manager(name,age,salary,Address)
{
    // this.name=name
    // this.age=age

    Employee.call(this,name,age,salary)
    this.Address=Address
}
Manager.prototype=Object.create(Employee.prototype)
Manager.prototype.constructor=Manager
Manager.prototype.welcome=function()
{
    console.log("I am Manager")
}



// var per=new Person("Ali",23)
// per.show()
// var emp=new Employee("Ahmed",34)
// emp.show()
// var man=new Manager("Ahmed",23,2000,"Minia")
// console.log(per)
// console.log(per.constructor==Person)
// console.log(emp)
// console.log(emp.constructor==Employee)
// console.log(man)
// console.log(man.constructor==Manager)


//Overload function
var emp=new Employee()
var emp1=new Employee("Ali")
var emp2=new Employee("Ahmed",23)
var emp3=new Employee(age=23,name="dddd",salary=2000)
emp.show()
console.log(emp)
console.log(emp1)
console.log(emp2)
console.log(emp3)
Employee.test()
// emp.test()  //error test is static function 


console.log(emp.getX())  //private member
emp.setX(100)
console.log(emp.getX())




obj={

    GetSetGen:{
    GetX: function(){

        }
        ,
    SetX: function(){

        }
    }
}
// Object.defineProperty(obj,'GetSetGen',{
//     get:function (){

//     },
//     set:function(){

//     }
// })





