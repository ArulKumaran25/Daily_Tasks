//convert the first letter of the word into upper case

let a="hello , how are you!"
let b=a.split(' ');
for(var i=0;i<b.length;i++){
    b[i]=b[i].toUpperCase().charAt(0)+b[i].slice(1,b.length)
}
console.log(b.join(" "));