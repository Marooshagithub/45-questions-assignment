//q16
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestlist = ["huzaifa","aliyan","ashar"];
let dontCome = guestlist[0];
console.log(dontCome,"cannot join us on dinner");
guestlist.splice(0,1,"zaviyar");
console.log("congratulations,I have found a new bigger table for dinner");
//adding guest statting of array
guestlist.unshift("ali");
//adding guest ending of the array
guestlist.push("mussa");
//making a veriable for middle index sorting
let middleIndex: number = Math.floor(guestlist.length / 2);
//adding a new guest to middle of array
guestlist.splice(middleIndex,0,"ahtisham");
//print message of updated list
console.log("updated list of oue gest");
//sendind a invitation message to our gests one by one with their names
guestlist.forEach(Guest => console.log(`Salam Dear, ${Guest},Please join us on dinner`));