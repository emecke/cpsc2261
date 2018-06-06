import { Component, OnInit, Input, Output } from '@angular/core';
import { recipe } from '../recipe.class';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeBankService } from '../recipe-bank.service';
import { RecipeModificationComponent } from '../recipe-modification/recipe-modification.component';
import { RecipeDeletionComponent } from '../recipe-deletion/recipe-deletion.component';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  
  rList: Array<recipe>;
  @Input() show: boolean;
  @Output() r: recipe = new recipe("");
  private name: string;
  private item: string;
  private quantity: number = 0;
  private instruction: string;
  private time: number = 0;
  
  constructor(private recipeBank: RecipeBankService) { }

  ngOnInit() {
    this.getRecipes();
  }


  getRecipes() {
    this.recipeBank.getRecipes().subscribe(recipeList => this.rList = recipeList);
  }


  //returns total number of the item or -1 for error.
  newItem() {
    let x = this.r.addItem(this.item, this.quantity);
    this.item = undefined;
    this.quantity = undefined;
    return x;
  }

  //returns the total time of the recipe
	//returns -1 for error
  newInstruction() {
    let x = this.r.addInstruction(this.instruction, <number>this.time);
    this.instruction = undefined;
    this.time = undefined;
    return x;
  }

  setName() {
    this.r.name = this.name;
    this.name = undefined;
  }

  saveToList() {
    this.rList.push(this.r);
  }


}
