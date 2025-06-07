// This function calculates the fare for a boda boda ride
function calculateBodaFare() {
    // Prompt the user to enter distance in kilometers
    let numberOfKilometres = prompt("Unafika wapi Mkubwa? Kilometre ngapi?");
    numberOfKilometres = Number(numberOfKilometres); // Convert the input to a number

    // Validate the input
    if (isNaN(numberOfKilometres) || numberOfKilometres <= 0) {
        alert("Tafadhali weka nambari sahihi ya kilometre (zaidi ya 0).");
        return;
    }

    // Define fare rules
    const baseFare = 50; // Base fare in KES
    const chargePerKm = 15; // Charge per kilometer in KES

    // Calculate total fare
    const distanceFare = numberOfKilometres * chargePerKm;
    const totalFare = baseFare + distanceFare;

    // Display fare breakdown
    console.log(`Uko kwote? Iyo ni ${numberOfKilometres} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka huko: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");
}

// Call the function to run it on page load
calculateBodaFare();
