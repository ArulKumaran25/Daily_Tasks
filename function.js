function isuserActiveuser(username) {
    if (username === "Arul") {
        return true;
    }
    else if (username === "Rahul") {
        return true;
    }
    else {
        console.log("user name is unknown " + username);
        return false;
    }
}
if (isuserActiveuser("aswin")) {
    console.log("Logged in with Arul");
}
