
const convert = require('convert-units'); 
const res1 = convert(9).from('C').to('K'); 
const res2 = convert(3).from('K').to('C'); 
const res3 = convert(2).from('mm').to('cm'); 
const res4=convert(5).from('cm').to('mm');
console.log("converting from centimeter to Kilometer");
console.log(res1); 
console.log("convert from kilometer to centimeters");
console.log(res2);
console.log("convert from millimeter to centimeter");
console.log(res3);
console.log("converting from Kilometer to millimeter");
console.log(res4);