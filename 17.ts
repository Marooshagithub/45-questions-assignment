//q17
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


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
console.log("updated list of our gest");
//sendind a invitation message to our gests one by one with their names
guestlist.forEach(Guest => console.log(`Salam Dear, ${Guest},Please join us on dinner`));
console.log("unfortunately, the new table not arrived at time so we can invite only two guests");
//remove guests from list by using loop
while(guestlist.length >2){
    let removedGuest = guestlist.pop();
    console.log(`sorry,${removedGuest},I can't invite you on dinner`);
}
console.log("invitation to 2 guests");
guestlist.forEach(lasttwo =>console.log(`luckely ${lasttwo},you are still invited on dinner`));
//removing last two guests
guestlist.pop();
guestlist.pop();

console.log("empty list:",guestlist);

