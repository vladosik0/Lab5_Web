function applyDiscount(medicines) {
	return medicines.map((medicine, index) => {
		let discountPrice = medicine.price;
		if (medicine.price > 300) {
			discountPrice *= 0.7;
		}
		return { id: index + 1, name: medicine.name, price: discountPrice };
	});
}

const medicines = [
	{ name: "Noshpa", price: 170 },
	{ name: "Analgin", price: 55 },
	{ name: "Quanil", price: 310 },
	{ name: "Alphacholine", price: 390 },
];

const discountedMedicines = applyDiscount(medicines);
for (let i = 0; i < discountedMedicines.length; i++) {
    console.log(discountedMedicines[i])
}