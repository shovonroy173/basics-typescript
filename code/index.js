function sum(a, b) {
    return a + b;
}
// default parameter & optional parameter
var greet = function (name, id) {
    if (name === void 0) { name = "John"; }
    return "Welcom ".concat(name, " , ").concat(id);
};
console.log(greet());
console.log(sum(5, 10));
