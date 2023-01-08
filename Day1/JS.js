//Var ==> not access by any one

// var x;  
// x=2;  //set
// console.log(x);  //get

function getValue()
{
    var x=3;
    // console.log(x);
    // var z=0;
    return function ()
    {
     
        x=200
        console.log("Weclome "+x)
    }
    
}

var res=getValue()
res()

// for(var i=0;i<10;i++) //i=10
// {
    
// var btn=document.createElement('button')
// var txt_btn=document.createTextNode(i)
// btn.appendChild(txt_btn)
// var div=document.getElementById("calc")
// div.appendChild(btn)
// btn.onclick=(function(val){
//     return function(){
//         alert(val)
//     }
   
// })(i)
// }


//Objects  ==> literal Object   

// var student1={
//     Name:"Nawal",
//     Age:24,
//     print:function()
//     {alert("Welcome")}
// }


// var student2={
//     Name:"Nawal",
//     Age:24,
  
// }

// student.Address="Minia"

// //constructor
// var obj=new Object()
// obj.Name="Nawal"  //set and create

// console.log(obj.Name) //get

// student.print=function(){alert("welcome")}
// console.log(student)
// student.print()

var student1={
    Name:"Nawal",
    Age:24,
    print:function(number)
    {alert("Welcome "+this.Name)}
}


var student2={
    Name:"ali",
    Age:29
}



// student1.print()
// console.log(student2)
// student1.print("ali")   print with para

//using Call function

// student1.print.call(student2)
// console.log(student2)
//  student1.print.call(student2,1,2) //student2.print()

// apply
// student1.print.apply(student2,[12,11])
// console.log(student2)


var s=student1.print.bind(student1,11)


// student1.print.call(student2)
console.log(s())
console.log(this)
console.log(student1)



