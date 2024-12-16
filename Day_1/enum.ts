enum direction{
    up=0,
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

var checkSubject=(check:sub)=>{
    if(check==sub.tamil || check==sub.english)
        return "It is a Language"
    else
        return "It is not a Language"
};

console.log(checkSubject(sub.science));
console.log(checkSubject(sub.tamil));

