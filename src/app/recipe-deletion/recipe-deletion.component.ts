import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../recipe.class';
import { RecipeBankService } from '../recipe-bank.service';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { NewRecipeComponent } from '../new-recipe/new-recipe.component';
import { RecipeModificationComponent } from '../recipe-modification/recipe-modification.component';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';

@Component({
  selector: 'app-recipe-deletion',
  templateUrl: './recipe-deletion.component.html',
  styleUrls: ['./recipe-deletion.component.css']
})
export class RecipeDeletionComponent implements OnInit {

  
  @Input('r') r: recipe;
  @Input('showDelete') showDelete: boolean;
  rList: Array<recipe>;

  constructor(private recipeBank: RecipeBankService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeBank.getRecipes().subscribe(recipeList => this.rList = recipeList);
  }


  deleteRecipe() {   
    let i: number;
    //current method of delete leaves behind undefined elements. Should be resolved when accessing database information rather than the demo array.
    i = this.rList.findIndex(element => element != undefined && element.name === this.r.name);
    delete this.rList[i]
    //this.rList = this.rList.filter(element => element.name === this.r.name );
  }

  cancel() {
    this.showDelete = false;
  }
}
