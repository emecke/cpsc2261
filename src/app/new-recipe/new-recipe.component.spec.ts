import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewRecipeComponent } from './new-recipe.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeModificationComponent } from '../recipe-modification/recipe-modification.component';
import { RecipeDeletionComponent } from '../recipe-deletion/recipe-deletion.component';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';

describe('NewRecipeComponent', () => {
  let component: NewRecipeComponent;
  let fixture: ComponentFixture<NewRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NewRecipeComponent, 
        RecipeDeletionComponent, 
        RecipeModificationComponent, 
        ViewRecipeComponent  ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
