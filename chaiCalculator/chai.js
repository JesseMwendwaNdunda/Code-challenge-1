// This function calculates the ingredients needed to make a certain number of cups of Kenyan chai
function calculateChaiIngredients() {
    // Prompt user for the number of cups needed by the user
    let numberOfCups = prompt("Karibu! How many cups of Chai Bora would you like to make?");
    numberOfCups = Number(numberOfCups); // Convert the input to a number

    // Check if the number input by the user is a valid number
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    // Define the standard recipe quantities for one cup
    const waterPerCup = 200; // this value is in ml
    const milkPerCup = 50;  // this value is in ml
    const teaLeavesPerCup = 1; // this value is in tablespoons
    const sugarPerCup = 2;  // this value is in teaspoons

    // To calculate the total amount of ingredients needed
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;

    // To display the result of the above calculations
    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need the following:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
    console.log("\nEnjoy your Chai Bora!");
}

// Call the function so it runs when the page loads
calculateChaiIngredients();
