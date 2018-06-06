import { recipe } from './recipe.class';
import { ingredient } from './ingredient.class';


export const DEMO_LIST: recipe[] = [
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
}
];