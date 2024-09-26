//rest parameters

let [a,b,...rest]=[1,2,3,4,5,6,7];
console.log(rest); //purpose of rest parameters

function addNumbers(...numbers:number[]){
    let count=0;
    for(let i of numbers){
        count+=i;
    }
    return count;
}
console.log(addNumbers(1,2));
console.log(addNumbers(1,2,3));
console.log(addNumbers(1,2,3,4));





