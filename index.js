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
let getObjectKeyValues = (patients) => {
    const output = []; // Array to hold the result

    // Iterate backwards through every other object
    for (let i = patients.length - 1; i >= 0; i -= 2) {
        const patient = patients[i]; // Get the current patient object

        // Use a for-in loop to access each key in the patient object
        for (let key in patient) {
            if (typeof patient[key] === "boolean") { // Check if the property is boolean
                // Add the formatted string to the output array
                let formatted = `${key}: ${patient[key]}`;
                output.push(formatted);
            }
        }
    }

    return output; // Return the result array
};

// Problem #3 //
let getDailyMedications; 

// Problem #4 //
let getOneMedBySpecies; 