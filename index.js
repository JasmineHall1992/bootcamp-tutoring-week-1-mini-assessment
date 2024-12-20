/*
Only declare your variables with const and let.
*/

// Problem #1 //
//I: an object called patient as the parameter
//O: a string that includes the name of the LAST medication, the type and how frequently to take
let getLastMedicationInfo = (patient) => {
    //make variables to access the information
   const lastMedicine = patient.medications[patient.medications.length - 1];
   //the last medicine's name
    const lastName = lastMedicine.name;
    //the last medicine's type
    const lastType = lastMedicine.type;
    //the last medicines frequency
    const instructions = lastMedicine.frequency;
   //use a template literal to place together
   const infoReturned = `${lastName} - ${lastType} - ${instructions}`;
   return infoReturned;
};

// Problem #2 //
//I: one parameter that represents an array of patients
//O: an array of strings
let getObjectKeyValues = (patients) =>
    // a backwads

// Problem #3 //
let getDailyMedications 

// Problem #4 //
let getOneMedBySpecies 
