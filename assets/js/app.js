 // You can check this Variables are Available or not under the window object
var firstName; 
var lastName; 
var birthYear; 
var job;
let age;
// Receive the values from input 
firstName = prompt("Enter Your First Name");
lastName = prompt("Enter Your Last Name");
job = prompt("What is Your Profession ?")
// You can check this Variables are Available or not under the window object
//Eligible to vote 
let isEligibleToVote;
// check Eligibility 
if (parseInt(age) >= 18) {
    isEligibleToVote = true;
} 
else {
    isEligibleToVote = false;
}

//family storage array 
let familyMember = new Array();
//number of family 
let numberOfFamily;

numberOfFamily = prompt("Number of Family  ? ");
//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    familyMember[i] = prompt("Your Family  Members " + (i + 1));
}

age = prompt("How old are you?");

(function() {

    console.log("Here is your Profile ")
    console.log("Full Name: " + firstName + " " + lastName);
    console.log("Profession : " + job);
    console.log("Age : " + age + " " + "years old");
    console.log("Is Eligible to Vote : " + isEligibleToVote);

    console.log("Family Members ");

    //Displaying the family member with foreach
    familyMember.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

})();

