import { InMemoryDbService } from 'angular-in-memory-web-api';
import { recipe } from './recipe.class';
import { ingredient } from './ingredient.class';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const RLIST = [
        { name: "peas and carrots", 
        ingredients: new Map<string, ingredient>(), 
        instructions: new Map<string, number>(), 
        estimatedTime: 0,
        addItem: recipe.prototype.addItem,
        addInstruction: recipe.prototype.addInstruction,
        getArrayIngredients: recipe.prototype.getArrayIngredients,
        getArrayInstructions: recipe.prototype.getArrayInstructions
      },
      { name: "beef and broccoli", 
        ingredients: new Map<string, ingredient>(), 
        instructions: new Map<string, number>(), 
        estimatedTime: 0,
        addItem: recipe.prototype.addItem,
        addInstruction: recipe.prototype.addInstruction,
        getArrayIngredients: recipe.prototype.getArrayIngredients,
        getArrayInstructions: recipe.prototype.getArrayInstructions
      },
      { name: "chicken soup", 
        ingredients: new Map<string, ingredient>(), 
        instructions: new Map<string, number>(), 
        estimatedTime: 0,
        addItem: recipe.prototype.addItem,
        addInstruction: recipe.prototype.addInstruction,
        getArrayIngredients: recipe.prototype.getArrayIngredients,
        getArrayInstructions: recipe.prototype.getArrayInstructions
      }
    ];
    return {RLIST};
  }
}
