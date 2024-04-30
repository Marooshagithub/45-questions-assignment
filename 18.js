var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestoVisit = ["SAUDIARABIA", "TURKEY", "SINGAPORE", "MALAISHIA", "MALDIVES"];
console.log("original order:", countriestoVisit);
//print the array in alphabetical order without modifying actual array
console.log("alphabetical onder:", __spreadArray([], countriestoVisit, true).sort());
console.log("still in original order:", countriestoVisit);
//print the array in reversed order without modifying the actual array
console.log("reverse order:", __spreadArray([], countriestoVisit, true).reverse());
//check is it in original order
console.log("still in original order:", countriestoVisit);
//we reverse the original array
console.log("original array reverses:", countriestoVisit.reverse());
//we change it to original array
console.log("back to original array:", countriestoVisit.reverse());
//we sort original array in alphabetical order
console.log("alphabetical oder:", countriestoVisit.sort());
//we changed original to reversed
console.log("original array reverses:", countriestoVisit.reverse());
