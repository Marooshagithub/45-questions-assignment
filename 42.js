/*

42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
//define the fuction to show magicians names
function show_megicians(megicians_names) {
    magicians_names.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array
function make_great(magicians_names) {
    return magicians_names.map(function (name) { return "The Great ".concat(name, " "); });
}
//define an array of magicians names
var magicians_names = ["maha", "aliyan", "ahsan"];
//call make_great function to modify magicians names
var great_magicians = make_great(magicians_names);
console.log(great_magicians);
//call show_magicians that show modified list of magicians names
show_megicians(great_magicians);
