enum direction{
    up=1,
    down,
    left,
    right
};
console.log(direction[2]);
console.log(direction[1]);
console.log(direction.left);
console.log(direction.right);

enum sub{
     tamil,
     english,
     maths,
     science,
     social
};

var checksub=(check:sub)=>{
    if(check==sub.tamil || check==sub.english)
        return "It is a Languge"
    else
        return "It is not a Language"
};

console.log(checksub(sub.science));
console.log(checksub(sub.tamil));

