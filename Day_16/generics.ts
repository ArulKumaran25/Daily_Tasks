function identity<T>(value:T):T{
    return value;
}
const num=identity<number>(42);
console.log(num);

const str=identity<string>("Hello All");
console.log(str);

const arr=identity<number[]>([1,2,3,4]);
console.log(arr);


