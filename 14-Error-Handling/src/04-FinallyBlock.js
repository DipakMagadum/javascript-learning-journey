console.log("Application Started");

try {
    console.log("Fetching product information...");

    const product = productData;

    console.log("Product:", product);
} catch (error) {
    console.log("Unable to fetch product information.");
    console.log("Error:", error.message);
} finally {
    console.log("Product request process completed.");
}

console.log("Application Closed");