/*


43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/


function show_megicians(megicians_names: string[]):void{
    magicians_names.forEach(name => console.log(name));
}
//function to make magicians great through .map() it will modify array
function make_great(magicians_names:string[]){
    return magicians_names.map(name => `The Great ${name} `);
}
//define an array of magicians names
let magicians_names = ["maha","aliyan","ahsan"];

//making a copy of original array through .slice() function
let copy_magicians_names = magicians_names.slice()

//modify the copied array to include "The Great"with there names
let copy_great_megicians =make_great(copy_magicians_names)

 //console.log(copy_great_megicians);

//show both arrays (original and copied)

//original
console.log("Original Array\n")
show_megicians(magicians_names);
//copied
console.log("\n Copied Array\n")
console.log(copy_great_megicians);


