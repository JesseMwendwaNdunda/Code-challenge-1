// This function estimates the transaction fee for sending money via mobile money
function estimateTransactionFee() {

    // Prompt the user to enter the amount they want to send
    let sendMoney = prompt("How much are you sending? (KES):");
    sendMoney = Number(sendMoney); // Convert the input to a number

    // Validate the input
    if (isNaN(sendMoney) || sendMoney <= 0) {
        alert("PLease put an amount greater than 0).");
        return;
    }

    // Calculate 1.5% of the amount
    let fee = 0.015 * sendMoney;

    // Apply fee limits using if-else logic
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }

    // Calculate the total amount to be debited
    const total = sendMoney + fee;

    // Display the result
    console.log(`Sending  ${sendMoney}kes:`);
    console.log(`Calculated Transaction Fee: ${fee}kes`);
    console.log(`Total amount to be debited:  ${total}kes`);
    console.log("\nSend Money Securely!");
}

// Call the function to run when the page loads
estimateTransactionFee();

