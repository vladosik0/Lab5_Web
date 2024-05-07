function Storage(initialItems) {
	this.items = initialItems;

	this.getItems = function () {
		return this.items;
	};

	this.addItem = function (item) {
		this.items.push(item);
	};

	this.removeItem = function (item) {
		const index = this.items.indexOf(item);
		if (index !== -1) {
			this.items.splice(index, 1);
		}
	};
}

const arr = ["apple", "banana", "mango"];
const storage = new Storage(arr);
console.log(storage.getItems());

storage.addItem("tomato");
console.log(storage.getItems());

storage.removeItem("apple");
console.log(storage.getItems());