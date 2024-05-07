const productDatabase = [
	{ name: "Product 1", price: 10 },
	{ name: "Product 2", price: 15 },
	{ name: "Product 3", price: 20 }
];

function getProductDetails(productId, successCallback, errorCallback) {
	const product = productDatabase[productId];

	if (product) {
		successCallback(product);
	} else {
		errorCallback("Product not found");
	}
}

const productId = 4;
getProductDetails(
	productId,
	(product) => {
		console.log("Product details:", product);
	},
	(error) => {
		console.error("Error:", error);
	}
);
const productIdTest = 1;
getProductDetails(
	productIdTest,
	(product) => {
		console.log("Product details:", product);
	},
	(error) => {
		console.error("Error:", error);
	}
);