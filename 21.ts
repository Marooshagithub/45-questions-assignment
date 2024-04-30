//q21
//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.
//creating object
interface itcourse{
    courseName:string ;
    languages:string ;
    location:string;
    onsiteStudent:number;  
}
let itcourse ={
    courseName : "cloud generative AI",
    language : "typescript,javascript,python",
    location : "Governer House",
    onsiteStudent : 50000,
    
}
console.log(itcourse);