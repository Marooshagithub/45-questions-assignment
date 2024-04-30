/*41

41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/


function show_megicians(megicians_names: string[]):void {
    magicians_names.forEach(name => console.log(name));
}
//define an aray containing magicians name
let magicians_names = ["maha","aliyan","ahsan"];

//call the function to print each magician name
show_megicians(magicians_names);
        
 