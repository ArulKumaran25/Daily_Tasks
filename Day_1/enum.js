var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["left"] = 2] = "left";
    direction[direction["right"] = 3] = "right";
})(direction || (direction = {}));
;
console.log(direction[2]);
console.log(direction[1]);
console.log(direction.left);
console.log(direction.right);
var sub;
(function (sub) {
    sub[sub["tamil"] = 0] = "tamil";
    sub[sub["english"] = 1] = "english";
    sub[sub["maths"] = 2] = "maths";
    sub[sub["science"] = 3] = "science";
    sub[sub["social"] = 4] = "social";
})(sub || (sub = {}));
;
var checksub = function (check) {
    if (check == sub.tamil || check == sub.english)
        return "It is a Languge";
    else
        return "It is not a Language";
};
console.log(checksub(sub.science));
console.log(checksub(sub.tamil));
