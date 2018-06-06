import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeModificationComponent } from './recipe-modification/recipe-modification.component';
import { RecipeDeletionComponent } from './recipe-deletion/recipe-deletion.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    NewRecipeComponent,
    RecipeModificationComponent,
    RecipeDeletionComponent,
    ViewRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
