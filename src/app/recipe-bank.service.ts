import { Injectable } from '@angular/core';
import { recipe } from './recipe.class';
import { DEMO_LIST } from './mock-recipies';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RecipeBankService {

  recipeList: Array<recipe> = DEMO_LIST;
  
  constructor() { }

  getRecipes(): Observable<Array<recipe>> {
    return of(DEMO_LIST);
  }

  addRecipe(r: recipe) {
    this.recipeList.push(r);
  }
}
