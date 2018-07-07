import { Component, OnInit, Input } from '@angular/core';
import { AppComponent} from '../app.component';
import { Observable, of } from 'rxjs';

import { recipe } from '../recipe.class';
import { ingredient } from '../ingredient.class';
import { RecipeBankService } from '../recipe-bank.service';
import { RecipeModificationComponent } from '../recipe-modification/recipe-modification.component';
import { RecipeServerService } from '../recipe-server.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() show: boolean;
  rList: Array<recipe> = [];
  viewList: Map<string, boolean> = new Map<string, boolean>();
  editList: Map<string, boolean> = new Map<string, boolean>();
  deleteList: Map<string, boolean> = new Map<string, boolean>();
  
  constructor(private recipeServer: RecipeServerService) { 
    
  }

  ngOnInit() {

    this.getRecipes();

  }

  getRecipes(): void {
    
    let promise = this.recipeServer.getRecipeList().catch((reason)=> {
      console.log(reason);
      return reason;
    });

    promise.then((response: any)=> {
      console.log("assigning json to rlist");
      console.log(response.body)
      //this.rList = response.body;
      for(var k in response.body) {
        console.log(k, response.body[k]);
        let r = new recipe(response.body[k].name);
        r.estimatedTime = response.body[k].estimatedTime;
        r.ingredients = response.body[k].ingredients;
        r.instructions = response.body[k].instructions;
        this.rList.push(r);
     }

      /*
      response.body.array.forEach(element => {
        let r = new recipe(element.name);
        //r.estimatedTime = element.estimatedTime;
        this.rList.push(r);
      });
      */
      
    });
   
   
    this.rList.forEach(r => {
      this.viewList.set(r.name, false);
    });
    this.rList.forEach(r => {
      this.editList.set(r.name, false);
    });
    this.rList.forEach(r => {
      this.deleteList.set(r.name, false);
    });
  }

  //toggles the view flag for the recipe
  toggleView(r: recipe) {
    let state :boolean;
    if(this.viewList.has(r.name)) {
      state = !this.viewList.get(r.name);
      this.viewList.set(r.name, state);
    } else {
      this.viewList.set(r.name, true);
    }
    //ensure that a view toggle doesn't take user to editable view directly.
    this.editList.set(r.name, false);
    //allow view to cancel a delete request.
    if(this.deleteList.get(r.name)) {
      this.deleteList.set(r.name, false);
      this.viewList.set(r.name, true);
    }

  }

  //makes a recipe editable
  toggleEdit(r: recipe) {
    let state :boolean;
    if(this.editList.has(r.name)) {
      state = !this.editList.get(r.name);
      this.editList.set(r.name, state);
    } else {
      this.editList.set(r.name, true);
    }
  }

  toggleDelete(r: recipe) {

    this.deleteList.set(r.name, true);
    

  }

  showRecipe(r: recipe) {
    return this.viewList.get(r.name);
  }

  editRecipe(r: recipe) {
    return this.editList.get(r.name);
  }
  

  deleteRecipe(r: recipe) {
    return this.deleteList.get(r.name);
  }
}
