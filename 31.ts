/*

31. No Users: Add an if test to Exercise 28 to make sure the list of users
 is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct
 message is printed.
*/
let studentNAME:string [] = ["admin","eric","partisha"];
 studentNAME = [];




if(studentNAME.length < 1){
    console.log("we need to find some users!");
}


    for(let user of studentNAME){
        if(user === "admin"){
            console.log("hello admin,whould you want to see a status report?")
        }else{
            console.log("hello ${user},thank you for logging again")
        }
    }



