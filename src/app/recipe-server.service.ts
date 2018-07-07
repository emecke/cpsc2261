import { Injectable } from '@angular/core';
import { recipe } from './recipe.class';
import { ingredient } from './ingredient.class';
import { Observable, of } from 'rxjs';
import { HttpRequest, HttpClient, HttpResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RecipeServerService {
  
  recipeList: Array<recipe>;

  constructor(private http: HttpClient) { 
    this.recipeList = [];
  }


  //from bbt with http example
  getRecipeList(): Promise<any>{
    let request = this.http
    .request(new HttpRequest("GET","http://localhost:8000/recipelist"))
    .toPromise().catch((reason)=>{
      console.log(reason);
      return reason;
    });

    request.then((response: any)=>{
      console.log(response.body);
      return response;
    });
    
    return request;
  }





  //returns -1 if recipe exists
  //returns 0 for sucessfull add
  addRecipe(r: recipe) {
    
  }

  //returns -1 if deletion fails
  //return 0 for sucessful delete
  deleteRecipe(r: recipe) {

  }

  //returns -1 for recipe not found
  //returns recipe object if found.
  getRecipe(name: string) {

  }

  //returns -1 for recipe not added.
  //returns 0 for sucessful add.
  updateRecipe(r: recipe) {

  }

  //based on example files
  init(){
    console.log("I am in the http service");
    this.getRecipeList().then((response: any)=>{
     this.recipeList = response.body;
     return response;
    }).catch(()=>{})
    //Quick debugging message
 }

 
};
