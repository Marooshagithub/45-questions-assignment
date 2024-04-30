//q 24
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array
var apple = "apple";
var upperCase = "APPLE";
//TEST FOR EQUALITY AND INEQUALITY
console.log("is apple is equal to apple");
console.log(apple = "apple");
console.log("\n is apple not equal to apple");
console.log(apple != "apple");
//TEST USING  LOWERCASE FUNCTION
console.log("is apple is equal to APPLE in programming Language by applying lowercase function");
console.log(upperCase.toLowerCase() == "apple");
console.log("\nis apple is not equal to APPLE in programming Language by applying lowercase function");
console.log(upperCase.toLowerCase() != "apple");
//numerical test <,>,=,!=
var twenty = 20;
var fifteen = 15;
console.log("is 20 greaterthan 15");
console.log(20 > 15);
console.log("is 15 greaterthan 20");
console.log(15 > 20);
console.log("is 20 equal to twenty");
console.log(twenty == 20);
console.log("is fifteen not equal to twenty");
console.log(fifteen != twenty);
console.log("is fifteen smallerthan o");
console.log(fifteen < 0);
console.log("is fifteen lessthan or equal to twenty");
console.log(15 <= 20);
console.log("is 15 greaterthan or equal to 20");
console.log(fifteen >= twenty);
//test for "and" & "or" operator
console.log("twenty is not equal to ten & fifteen is not equal to three");
console.log(twenty != 10 && fifteen != 3);
console.log("twenty is > 50 or twenty is < 50");
console.log(twenty > 50 || twenty < 50);
//test whether an item include in array
var fruiteName = ["banana", "orange", "mango", "guava"];
if (fruiteName.includes("orange")) {
    console.log("orange includes in array");
}
if (!fruiteName.includes("cherry")) {
    console.log("cherry not includes in array");
}
console.log("\nis orange includes in array");
console.log(!fruiteName.includes("orange"));
