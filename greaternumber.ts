function findMax(array: number[]): number { // using function
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
const num = [4,2,5,1,7];
console.log(findMax(num)); 


const numb=[1,2,3,4]; // builtin function
const max1=Math.max(...numb);
console.log(max1);



const numbers=[1,2,3,4,5];
let max=numbers[0];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
console.log(max);





