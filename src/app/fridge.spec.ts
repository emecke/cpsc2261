import {fridge} from "./fridge.class";
import {ingredient} from "./ingredient.class";
import {recipe} from "./recipe.class";

const NEED = 0;
const HAVE = 1;

describe("Fridge Unit Test", function() {
	

	let f : fridge;
	let r : number;
	let r1 : recipe;
	let r2 : recipe;

	beforeEach(function() {
		f = new fridge();
		r = -5; //unexpected return value.
		
		//recipes
		r1 = new recipe("veggies");
		r1.addItem("peas", 5);
		r1.addItem("carrots", 3);
		r1.addInstruction("chop carrots", 5);
		r1.addInstruction("shell peas", 10);

		r2 = new recipe("stir fry");
		r2.addItem("beef", 1);
		r2.addItem("broccoli", 2);
		r2.addItem("carrots", 10);
		r2.addInstruction("slice beef", 2);
		r2.addInstruction("chop vegetables", 4);
		r2.addInstruction("saute ingredients", 8);

	});


	//defines a test ie spec within angular framework
	//it adds a test to jasmine framework
	//can have multiple 'its'
	it("new fridge test", function() {
		expect(f.contents.size).toBe(0);
	});

	it("add ingredient test", function() {
		//first ingredient
		r = f.add("milk", 1);
		expect(f.contents.size).toBe(1);
		expect(f.contents.has("milk")).toBe(true);
		expect(f.contents.get("milk").quantity).toBe(1);
		expect(r).toBe(1);

		//second ingredient
		r = f.add("carrots", 5);
		expect(f.contents.size).toBe(2);
		expect(f.contents.has("carrots")).toBe(true);
		expect(f.contents.get("carrots").quantity).toBe(5);
		expect(r).toBe(5);


		//add similar ingredient
		r = f.add("Milk", 2);
		expect(f.contents.size).toBe(2);
		expect(f.contents.get("milk").quantity).toBe(3);
		expect(r).toBe(3);

		//add invalid amount
		r = f.add("Milk", -2);
		expect(f.contents.get("milk").quantity).toBe(3);
		expect(r).toBe(-1);


	});

	it("remove ingredient test", function() {
		
		//setup
		f.add("milk", 3);
		f.add("carrots", 5);

	
		//valid removal
		r = f.remove("milk", 1);
		expect(f.contents.get("milk").quantity).toBe(2);
		expect(r).toBe(2);


		//similar valid removal
		r = f.remove("Carrots", 1);
		expect(f.contents.get("carrots").quantity).toBe(4);
		expect(r).toBe(4);

		//invalid removal amount
		r = f.remove("carrots", -1);
		expect(f.contents.get("carrots").quantity).toBe(4);
		expect(r).toBe(-1);

		//remove to quantity zero
		r = f.remove("carrots", 4);
		expect(f.contents.get("carrots").quantity).toBe(0);
		expect(r).toBe(0);

		//invalid removal item
		r = f.remove("peas", 1);
		expect(f.contents.size).toBe(2);
		expect(r).toBe(-1);
	
		//remove more than quanity
		r = f.remove("milk", 3);
		expect(f.contents.size).toBe(1);
		expect(r).toBe(-1);



	});

	it("recipe check: have all items", function() {
		//setup
		f.add("carrots", 4);
		f.add("peas", 10);

		//recipe with all items
		let lists = f.checkRecipe(r1);
		expect(lists.length).toBe(2);
		expect(lists[NEED].length).toBe(0);
		expect(lists[HAVE].length).toBe(2);
		
		expect(lists[HAVE][0].name).toBe("peas");
		expect(lists[HAVE][0].quantity).toBe(10);
		
		expect(lists[HAVE][1].name).toBe("carrots");
		expect(lists[HAVE][1].quantity).toBe(4);
	});

	it("recipe check: have some items", function() {
		//setup
		f.add("carrots", 4);
		f.add("peas", 10);
		
		//recipe with some items
		let lists = f.checkRecipe(r2);
		expect(lists.length).toBe(2);
		expect(lists[NEED].length).toBe(3);
		expect(lists[HAVE].length).toBe(1);

		expect(lists[HAVE][0].name).toBe("carrots");
		expect(lists[HAVE][0].quantity).toBe(4);

		expect(lists[NEED][0].name).toBe("beef");
		expect(lists[NEED][0].quantity).toBe(1);
		
		expect(lists[NEED][1].name).toBe("broccoli");
		expect(lists[NEED][1].quantity).toBe(2);
		
		expect(lists[NEED][2].name).toBe("carrots");
		expect(lists[NEED][2].quantity).toBe(6);


	});

	it("recipe check: no items avilable (missing and zero quanitity)", function() {
		//zero carrots
		f.add("carrots", 0);
		expect(f.contents.has("carrots")).toBe(true);
		expect(f.contents.get("carrots").quantity).toBe(0);
		
		
		let lists = f.checkRecipe(r2);
		expect(lists.length).toBe(2);
		expect(lists[NEED].length).toBe(3);
		expect(lists[HAVE].length).toBe(0);

		expect(lists[NEED][0].name).toBe("beef");
		expect(lists[NEED][0].quantity).toBe(1);
		
		expect(lists[NEED][1].name).toBe("broccoli");
		expect(lists[NEED][1].quantity).toBe(2);
		
		expect(lists[NEED][2].name).toBe("carrots");
		expect(lists[NEED][2].quantity).toBe(10);


	});

})