import { ingredient } from './ingredient.class';
import { recipe } from './recipe.class';

const NEED = 0;
const HAVE = 1;

export class fridge {
	contents: Map<string, ingredient> = new Map();
	constructor() {}

	//returns total quaitity of item in fridge or  
	//-1 for invalid number (quantity not changed)
	add(name: string, amt: number) {

		//to find similar ingredients
		let n : string = name.toLowerCase();
		let i : ingredient;
		
		//validate amt
		if(amt < 0 || isNaN(amt)) {
			return -1;
		}
		
		//add ingredient if not already in fridge
		if(!this.contents.has(n)) {
			this.contents.set(n, new ingredient(name)); // preserve formatting);
		}

		//update amount of ingredient in the fridge
		i = this.contents.get(n);
		return i.add(amt);

	}

	//Remove the specified amount of the item from the fridge
	//returns remaining quantity
	//if the amount falls below zero
	//remove the item completely from the fridge, returns -1
	remove(name: string, amt: number) {
		let n = name.toLowerCase();
		let i : ingredient;
		
		//validate amt & item exists
		if(amt < 0 || !this.contents.has(n)) {
			return -1;
		}

		//item exists
		i = this.contents.get(n);

		//remove item if more than available
		if(amt > i.quantity) {
			this.contents.delete(n);
			return -1
		} else { //keep item return it's new quanity.
			return i.subtract(amt);

		}

	}
	//Give a recipe, check what ingredient are already in the fridge. 
	//This method returns two lists.  
	//A shopping list, on what needs to be bought, and a list of what is already in the list. 
	//Note an item can be on both list, if there is not enough of it in a fridge.
	checkRecipe(r: recipe) {
		let lists = [];
		let needList: Array<ingredient> = [];
		let haveList: Array<ingredient> = [];
		lists[NEED] = needList;
		lists[HAVE] = haveList;
		
		r.ingredients.forEach((itemNeeded, lists) => {
			//create local variables to avoid modifying the recipe.
			let name = itemNeeded.name;
			let n = name.toLowerCase();
			let totalAmtNeeded = itemNeeded.quantity
			let iHave : ingredient = new ingredient(name);
			let iNeed : ingredient = new ingredient(name);
			iNeed.add(totalAmtNeeded);

			//ingredient not found
			if (!this.contents.has(n) || this.contents.get(n).quantity == 0) {
				needList.push(iNeed);
			} else { //ingredient found & quanity > 0
				iHave.add(this.contents.get(n).quantity);
				haveList.push(iHave);

				//insufficient quantity.
				if(iNeed.subtract(iHave.quantity) >= 0) {
					needList.push(iNeed);
				}			
			}

		  });


		  return lists;
	}
}
