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
    const infoReturned = `${lastName} - ${lastType} - Administer ${instructions}`;
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
//I: an array of animal patients
//O: a new output array of objects that include the name, type and administration of medicine
// Problem #3 //
// I: an array of animal patients
// O: a new output array of objects that include the name, type, and administration of medicine

let getDailyMedications = (patients) => {
    // Create an empty output array
    const output = [];

    // Outer loop: iterate over each patient
    for (let i = 0; i < patients.length; i++) {
        const patient = patients[i]; // Access each patient
        
        // Push the required object into the output array
        output.push({
            name: patient.name, // Access name
            type: patient.type, // Access type
            administration: patient.administration // Access administration
        });
    }
    
    // Return the final output array
    return output;
};


console.log(getDailyMedications(patients));

// Problem #4 //
//I: two parameters, patients and species, patient is an array, species is a string
//O: The function will return an array of objects. Each object includes:
//patient: A string combining the patient’s name and species.
//medication: A string representing the name of the single medication.
const getOneMedBySpecies = (patients, species) => {
    const output = []; // Initialize an empty output array

    // Loop through the patients array
    for (let i = 0; i < patients.length; i++) {
        const patient = patients[i];

        // Check if species matches and medications length is 1
        if (patient.species === species && patient.medications.length === 1) {
            output.push({
                patient: `${patient.name} - ${patient.species}`,
                medication: patient.medications[0].name
            });
        }
    }

    return output; // Return the output array
};

