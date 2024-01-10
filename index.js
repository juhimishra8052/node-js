const app =require('./app')

//console.log("hlw world");
var a=20;
var b=20;
var c =40;
// console.warn(a+b+c);
 const arr=[2,3,4,5,5,5,6];
// console.log(arr);
// console.log(arr[0])
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());
// const arr=[2,3,4,5,5,5,6];
// arr.filter((item)=>{
// console.log(item)
// });

let result =arr.filter((item)=>{
    return item===3
})
console.warn(result)