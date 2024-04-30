var guestlist = ["huzaifa", "aliyan", "ashar"];
var dontCome = guestlist[0];
console.log(dontCome, "cannot join us on dinner");
guestlist.splice(0, 1, "zaviyar");
console.log("congratulations,I have found a new bigger table for dinner");
//adding guest statting of array
guestlist.unshift("ali");
//adding guest ending of the array
guestlist.push("mussa");
//making a veriable for middle index sorting
var middleIndex = Math.floor(guestlist.length / 2);
//adding a new guest to middle of array
guestlist.splice(middleIndex, 0, "ahtisham");
//print message of updated list
console.log("updated list of our gest");
//sendind a invitation message to our gests one by one with their names
guestlist.forEach(function (Guest) { return console.log("Salam Dear, ".concat(Guest, ",Please join us on dinner")); });
console.log("unfortunately, the new table not arrived at time so we can invite only two guests");
//remove guests from list by using loop
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    console.log("sorry,".concat(removedGuest, ",I can't invite you on dinner"));
}
console.log("invitation to 2 guests");
guestlist.forEach(function (lasttwo) { return console.log("luckely ".concat(lasttwo, ",you are still invited on dinner")); });
//removing last two guests
guestlist.pop();
guestlist.pop();
console.log("empty list:", guestlist);
