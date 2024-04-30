/*

31. No Users: Add an if test to Exercise 28 to make sure the list of users
 is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct
 message is printed.
*/
var studentNAME = ["admin", "eric", "partisha"];
studentNAME = [];
if (studentNAME.length < 1) {
    console.log("we need to find some users!");
}
for (var _i = 0, studentNAME_1 = studentNAME; _i < studentNAME_1.length; _i++) {
    var user = studentNAME_1[_i];
    if (user === "admin") {
        console.log("hello admin,whould you want to see a status report?");
    }
    else {
        console.log("hello ${user},thank you for logging again");
    }
}
