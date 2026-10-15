
const double = (a) => a * 2;
console.log(double(2));
 
const  fruitsRouges = ["fraise" , "fromboise", "cerise"];
//for(let fruit of fruitsRouges){
 //   console.log('La ${fruit}  c est bon !')
//}

 

//fruitsRouges.array.forEach(fruit => 
  //  console.log('La ${fruit}  c est bon !')
//
//);
const nombres=[12,3,4,9];
let doubles =nombres.map(n => n*2);
console.log(doubles);
let d2= nombres.forEach(n=>console.log(n*2));
let paires  = nombres.filter(n=> n % 2 == 0)
console.log(paires);

