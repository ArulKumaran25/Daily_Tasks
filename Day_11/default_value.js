function printPerson(name, age, isMajor) {
    if (name === void 0) { name = 'Default Name'; }
    console.log(name);
    console.log(age);
    console.log(isMajor);
}
printPerson("Anto", 23, true);
printPerson(undefined, 20, true);
