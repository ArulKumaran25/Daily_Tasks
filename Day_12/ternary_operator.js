var a = 10;
var b = 20;
var c = 30;
var ans = 0;
// if(a>b){ // using normal if else conditions
//     if(a>c){
//          ans=a;
//     }
//     else{
//         ans=c;
//     }
// }else if(b>c){
//     ans=b;
// }
// else{
//   ans=c;
// }
ans = a > b ? (a > c ? a : c) : c > b ? c : b;
console.log(ans);
