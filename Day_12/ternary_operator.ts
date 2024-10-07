let a=10;
let b=20;
let c=30;
let ans=0;

if(a>b){ // using normal if else conditions
    if(a>c){
         ans=a;
    }
    else{
        ans=c;
    }
}else if(b>c){
    ans=b;
}
else{
  ans=c;
}

ans =a>b ?(a>c ? a:c):c>b?c:b; //using ternary operators
console.log(ans);




