let personProfile = {
    fname: "",
    lname: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    ageCalc: function() { return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc(Number(this.birthYear));
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    calcBmi: function() {

        let bodyMassIndex = this.weight / (this.height * this.height);


        bodyMassIndex = parseInt(bodyMassIndex.toFixed(1));

        console.log("Your Body Mass Index is : " + bodyMassIndex);
        if (bodyMassIndex < 18.5)
            console.log("Your are : Underweight");
        else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9)
            console.log("Your are : Normal");
        else if (bodyMassIndex >= 25.0 && bodyMassIndex <= 29.9)
            console.log("Your are : Overweight");
        else if (bmibodyMassIndex >= 30.0)
            console.log("Your are : Obese");


    }
};

// Receive the values from input and assign to object properties
personProfile.fname = prompt("Enter Your First Name");
personProfile.lname = prompt("Enter Your Last Name");
personProfile.job = prompt("What is Your Profession ?");
personProfile.birthYear = prompt("Enter Your Birth Date");
personProfile.weight = prompt("Your Weight in Kg  ? ");
personProfile.height = prompt("Your Height in M  ? ");
let numberOfFamily = prompt("Number of Family  ? ");

//Receiving the family number 
for (let i = 0; i < parseInt(numberOfFamily); i++) {
    personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
}

// call age and check vote fun
personProfile.ageCalc();
personProfile.checkVote();

// Adding Self Invoking Function Expression 
(function() {
    console.log("Full Name: " + personProfile.fname + " " + personProfile.lname);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    // call bmi calculator 
    personProfile.calcBmi();

    console.log("Family Members ");
    //Displaying the family member with foreach
    personProfile.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });

})();

