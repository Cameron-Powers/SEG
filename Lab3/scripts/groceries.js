	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name:"Other: Beer $12.99",
		vegetarian: true,
		glutenFree: false,
		price: 12.99,
		organic: false
	},
	{
		name:"Meat: Steak $10.99",
		vegetarian: false,
		glutenFree: true,
		price: 10.99,
		organic: false
	},
	{
		name: "Meat: Cod 10.99",
		vegetarian: false,
		glutenFree: true,
		price: 10.99,
		organic: false
	},
	{
		name:"Meat: Pork 8.99",
		vegetarian: false,
		glutenFree: true,
		price: 8.99,
		organic: false
	},
	{
		name:"Bakery: Naan 4.99",
		vegetarian: true,
		glutenFree: false,
		price: 4.99,
		organic: false
	},
	{
		name: "Bakery: Burger Buns 2.99",
		vegetarian: true,
		glutenFree: false,
		price: 2.99,
		organic: false
	},
	{
		name: "Produce: Cucumber 1.99",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true
	},
	{
		name:"Produce: Carrot 1.59",
		vegetarian: true,
		glutenFree: true,
		price: 1.59,
		organic: true
	},
	{
		name:"Produce: Corn 0.99",
		vegetarian: true,
		glutenFree: true,
		price: 0.99,
		organic: true
	},
	
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Both") && (prods[i].glutenFree == true) && (prods[i].vegetarian == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;	
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
