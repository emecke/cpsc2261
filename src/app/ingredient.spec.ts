import {ingredient} from "./ingredient.class";


describe("Ingredient Unit Test", function() {
	
	//to test return value
	let r : number;
	//to test properties of ingredient object
	let ing : ingredient;

	beforeEach(function() {
		r = -5;//set to unexpected return value in order to test invalid inputs.
		ing = new ingredient("carrots");

	});

	//defines a test ie spec within angular framework
	//it adds a test to jasmine framework
	//can have multiple 'its'
	it("new ingredient test", function() {
		expect(ing.name).toBe("carrots");
		expect(ing.quantity).toBe(0);
	});

	it("add quantity test", function() {
		//test add valid input
		r = ing.add(5);
		expect(ing.quantity).toBe(5);
		expect(r).toBe(5);

		r = ing.add(6);
		expect(ing.quantity).toBe(11);
		expect(r).toBe(11);

		//test invalid number input
		r = ing.add(-5);
		expect(ing.quantity).toBe(11);
		expect(r).toBe(-1);

		//program does not compile if i try to test a non number value.

	});

	it("subtract quanity test", function() {
		
		//setup, I don't use add function in order to keep tests independant.
		ing.quantity = 11;


		//valid input: quantity > 0, quanity - input is > 0
		r = ing.subtract(4);
		expect(ing.quantity).toBe(7);
		expect(r).toBe(7);

		//valid input:  quantity > 0, quanity - input is < 0
		r = ing.subtract(8);
		expect(ing.quantity).toBe(7);
		expect(r).toBe(-1);

		//valid input: quantity > 0, quanity - input is = 0
		r = ing.subtract(7);
		expect(ing.quantity).toBe(0);
		expect(r).toBe(0);

		//valid input: quantity = 0, quanity - input is < 0
		r = ing.subtract(1);
		expect(ing.quantity).toBe(0);
		expect(r).toBe(-1);

		//invalid input: subtract negative number
		r = ing.subtract(-5);
		expect(ing.quantity).toBe(0);
		expect(r).toBe(-1);

		//program does not compile if i try to test a non number value.

		
	});

})