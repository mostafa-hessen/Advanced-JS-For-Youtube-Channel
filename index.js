// let a=1
// let b=a
// a=2

// console.log("a",a);//2
// console.log("b",b);//2
 
// // console.log(typeof( 1+"1"));// 1













// // let myObject=
// // {
// //     name:"mostafa",
// //     age:"22"
// // }

// // let newobject= myObjec;
// // newobject.age="24"


// // console.log(myObjec);//name:"mostafa",age:"24"

// // console.log(newobj);//name:"mostafa",age:"24"



//  Shallow copy vs Deep copy



// Deep copy 
// let mostafa={//=> 123
//     age:22,
//     address:"fayoum"
// }

// let mohamed=mostafa //123
// mohamed.age=25

// console.log("mohamed",mohamed);
// console.log("mostafa",mostafa);

// console.log(mostafa==mohamed);















// shalow copy

let mostafaD={//=> 123
    age:22,
    address:"fayoum"
}

let mohamedD=Object.assign({},mostafaD,{nameD:"mohamed"})
mohamedD.age=27



console.log(mostafaD==mohamedD);

console.log("mohamed",mohamedD);
console.log("mostafa",mostafaD);





































