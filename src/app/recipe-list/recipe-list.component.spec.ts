import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewRecipeComponent } from '../new-recipe/new-recipe.component';
import { RecipeModificationComponent } from '../recipe-modification/recipe-modification.component';
import { RecipeDeletionComponent } from '../recipe-deletion/recipe-deletion.component';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';
import { RecipeListComponent } from './recipe-list.component';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NewRecipeComponent, 
        RecipeDeletionComponent, 
        RecipeModificationComponent, 
        ViewRecipeComponent,
        RecipeListComponent  ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
