import {recipe} from "./recipe.class";
import {ingredient} from "./ingredient.class";
import { LowerCasePipe } from "@angular/common";


describe("Recipe Unit Test", function() {
	
	//to test return value
	let r : number;
	//to test object methods.
	let rp : recipe;

	beforeEach(function() {
		rp = new recipe("veggies");
		r = -5 // unexpected return value to test for invalid cases.

	});


	//defines a test ie spec within angular framework
	//it adds a test to jasmine framework
	//can have multiple 'its'
	it("new recipe test", function() {
		expect(rp.name).toBe("veggies");
		expect(rp.estimatedTime).toBe(0);
		expect(rp.ingredients.size).toBe(0);
		expect(rp.instructions.size).toBe(0);
	});

	
	it("addItem test", function() {
		//add item that does not exist with valid amount
		r = rp.addItem("Carrots", 5);
		expect(r).toBe(5);
		expect(rp.ingredients.size).toBe(1);
		expect(rp.ingredients.has("carrots")).toBe(true);
		expect(rp.ingredients.get("carrots").quantity).toBe(5);

		//add item that does not exist with invalid amount
		r = rp.addItem("peas", -3);
		expect(r).toBe(-1);
		expect(rp.ingredients.size).toBe(1);
		expect(rp.ingredients.has("peas")).toBe(false);

		
		//add item that exists with invalid amount
		r = rp.addItem("carrots", -1);
		expect(r).toBe(-1);
		expect(rp.ingredients.size).toBe(1);
		expect(rp.ingredients.has("carrots")).toBe(true);
		expect(rp.ingredients.get("carrots").quantity).toBe(5);

		//add second item (valid inputs, zero case for amt)
		r = rp.addItem("peas", 0);
		expect(r).toBe(0);
		expect(rp.ingredients.size).toBe(2);
		expect(rp.ingredients.get("peas").quantity).toBe(0);

		//add item that exists with invalid amount
		r = rp.addItem("peas", -1);
		expect(r).toBe(-1);
		expect(rp.ingredients.size).toBe(2);
		expect(rp.ingredients.get("peas").quantity).toBe(0);

	});

	it("add instruction test", function() {
		
		//valid instruction, valid time
		r = rp.addInstruction("chop carrots", 5);
		expect(r).toBe(5);
		expect(rp.estimatedTime).toBe(5);
		expect(rp.instructions.size).toBe(1);
		expect(rp.instructions.has("chop carrots")).toBe(true);

		//valid instruction, invalid time
		r = rp.addInstruction("shell peas", -10);
		expect(r).toBe(-1);
		expect(rp.estimatedTime).toBe(5);
		expect(rp.instructions.size).toBe(1);
		expect(rp.instructions.has("shell peas")).toBe(false);

		//invalid instruction, valid time
		r = -5;//reset for testing return value
		r = rp.addInstruction("chop carrots", 5);
		expect(r).toBe(-1);
		expect(rp.estimatedTime).toBe(5);
		expect(rp.instructions.size).toBe(1);
		expect(rp.instructions.has("chop carrots")).toBe(true);

		//invalid instruction, invalid time.
		r = -5;//reset for testing return value
		r = rp.addInstruction("chop carrots", -5);
		expect(r).toBe(-1);
		expect(rp.estimatedTime).toBe(5);
		expect(rp.instructions.size).toBe(1);
		expect(rp.instructions.has("chop carrots")).toBe(true);

		//test second valid instruuction, valid time.
		r = rp.addInstruction("shell peas", 10);
		expect(r).toBe(15);
		expect(rp.estimatedTime).toBe(15);
		expect(rp.instructions.size).toBe(2);
		expect(rp.instructions.has("shell peas")).toBe(true);

		
	});

})