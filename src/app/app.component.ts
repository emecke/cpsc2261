import { Component } from '@angular/core';
import { recipe } from './recipe.class';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDeletionComponent } from './recipe-deletion/recipe-deletion.component';
import { RecipeModificationComponent } from './recipe-modification/recipe-modification.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Recipes';
  

  showList: boolean = true;
  showNew: boolean = false;
  showDelete: boolean = false;
  showModify: boolean = false;

  toggleList(){
    this.showNew = false;
    this.showList = true;
    this.showDelete = false;
    this.showModify = false;
  }  

  toggleNew() {
    this.showList = false;
    this.showNew = true;
    this.showDelete = false;
    this.showModify = false;
  }

  toggleDelete() {
    this.showDelete = true;
    this.showList = true;
    this.showModify = false;
    this.showNew = false;
  }

  toggleModify() {
    this.showDelete = false;
    this.showList = true;
    this.showModify = true;
    this.showNew = false;
  }
  
}
