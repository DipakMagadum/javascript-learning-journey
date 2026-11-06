console.log("Application Started");

try {
    console.log("Fetching customer information...");

    const customerName = userName;

    console.log("Customer Name:", customerName);
} catch (error) {
    console.log("Something went wrong!");
    console.log("Error Message:", error.message);
}

console.log("Application Completed");