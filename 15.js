var guestlist = ["huzaifa", "aliyan", "ashar"];
var dontCome = guestlist[0];
console.log(dontCome, "cannot join us on dinner");
guestlist.splice(0, 1, "zaviyar");
guestlist.forEach(function (Guest) { return console.log("Salam Dear, ".concat(Guest, ",Please join us on dinner")); });
