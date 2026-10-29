const API_URL = "https://dummyjson.com/products?limit=10";

async function getAvailableProducts() {
    try {
        console.log("Fetching product inventory...\n");

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Server returned status ${response.status}`);
        }

        const data = await response.json();

        if (!Array.isArray(data.products)) {
            throw new Error("Invalid product data received.");
        }

        const availableProducts = data.products.filter((product) => {
            return product.stock > 0;
        });

        if (availableProducts.length === 0) {
            console.log("No products are currently available.");
            return;
        }

        console.log("Available Products");
        console.log("==================");

        availableProducts.forEach((product) => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Stock: ${product.stock} units`);
            console.log("------------------");
        });

        console.log(`Total available products: ${availableProducts.length}`);
    } catch (error) {
        console.error("Unable to load product inventory:", error.message);
    }
}

getAvailableProducts();