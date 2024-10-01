let color; //type assertion (method:1)
color='red';
let endsWithD=(<string>color).endsWith('d');
let alternativeEndswithD=(color as string).endsWith('a');

console.log(endsWithD);
console.log(alternativeEndswithD);


let colour='red'; // type assertion (method:2) 
let endsWith=color.endsWith('d');
console.log(endsWith);


