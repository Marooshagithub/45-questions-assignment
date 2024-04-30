//q18
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in 
//alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let countriestoVisit: string[] = ["SAUDIARABIA","TURKEY","SINGAPORE","MALAISHIA","MALDIVES"];
console.log("original order:",countriestoVisit);
//print the array in alphabetical order without modifying actual array
console.log("alphabetical onder:",[...countriestoVisit].sort());
console.log("still in original order:",countriestoVisit);
//print the array in reversed order without modifying the actual array
console.log("reverse order:",[...countriestoVisit].reverse());
//check is it in original order
console.log("still in original order:",countriestoVisit);
//we reverse the original array
console.log("original array reverses:",countriestoVisit.reverse());
//we change it to original array
console.log("back to original array:",countriestoVisit.reverse());
//we sort original array in alphabetical order
console.log("alphabetical oder:",countriestoVisit.sort());
//we changed original to reversed
console.log("original array reverses:",countriestoVisit.reverse());
