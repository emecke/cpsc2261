import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDeletionComponent } from './recipe-deletion.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { NewRecipeComponent } from '../new-recipe/new-recipe.component';
import { RecipeModificationComponent } from '../recipe-modification/recipe-modification.component';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';
import { recipe } from '../recipe.class';
import { DEMO_LIST } from '../mock-recipies';

describe('RecipeDeletionComponent', () => {
  let component: RecipeDeletionComponent;
  let fixture: ComponentFixture<RecipeDeletionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDeletionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDeletionComponent);
    component = fixture.componentInstance;
    
    
    component.rList = DEMO_LIST;
    component.r = component.rList[0];
    component.showDelete = true;

    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //test button exist
  it('shows confirm delete buttons', () => {
    let dom: HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let buttonList :NodeListOf<Element> = dom.querySelectorAll("button");
    expect(buttonList.length).toBe(2);
    
  });

  //test function
  it("test delete", () => {
   component.deleteRecipe();
    
  expect(component.r).toBe(undefined);
  expect(component.rList.length).toBe(1);
  
  });

  it("test cancel", () => {
    component.cancel();
     
   expect(component.showDelete).toBe(false);
   expect(component.r).toBe(component.rList[0]);
   expect(component.rList.length).toBe(2);
   
   });

  //test buttons click

  it("test deleteRecipe button", () => {
    spyOn(component, 'deleteRecipe');
  
    let button = fixture.debugElement.nativeElement.querySelector('.confirmDeleteButton');
    button.click();

    fixture.detectChanges();
  
    fixture.whenStable().then(() => {
      expect(component.deleteRecipe).toHaveBeenCalled();
    })
  
  });

  it("cancel delete button", () => {
    spyOn(component, 'cancel');
  
    let button = fixture.debugElement.nativeElement.querySelector('.cancelDeleteButton');
    button.click();

    fixture.detectChanges();
  
    fixture.whenStable().then(() => {
      expect(component.cancel).toHaveBeenCalled();
    })
  
  });

});
