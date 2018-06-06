import {bottle} from "./bottle.class";


describe("BottleTesting", function() {
	
	//both functions passed to it and beforeEach share the same closure
	let b = 6; //in scope for all functions defined in describe.
	const capacity : number = 5;
	let bot = new bottle(capacity);

	beforeEach(function() {

	});

	//defines a test ie spec within angular framework
	//it adds a test to jasmine framework
	//can have multiple 'its'
	it("new bottle test", function() {
		expect(bot.amt).toBe(0);
		expect(bot.size).toBe(capacity);
	});

	it("single bottle fill test", function() {
		bot.fill();
		expect(bot.amt).toBe(capacity);
	});

	it("empty bottle test", function() {
		bot.empty();
		expect(bot.amt).toBe(0);
	});

	it("test pouring", function() {
		let bot1 = new bottle(5);
		
		
		let bot2 = new bottle(3);
		
		bot1.fill();
		
		bot1.pour(bot2);

		expect(bot1.amt).toBe(2);
		expect(bot2.amt).toBe(3);

	});

})