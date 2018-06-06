import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeModificationComponent } from './recipe-modification.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewRecipeComponent } from '../new-recipe/new-recipe.component';
import { RecipeDeletionComponent } from '../recipe-deletion/recipe-deletion.component';
import { ViewRecipeComponent } from '../view-recipe/view-recipe.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { recipe } from '../recipe.class';

describe('RecipeModificationComponent', () => {
  let component: RecipeModificationComponent;
  let fixture: ComponentFixture<RecipeModificationComponent>;

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
    fixture = TestBed.createComponent(RecipeModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.showModify = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("hides view recipe for undefined recipe", () => {
    component.r = new recipe("");
    fixture.detectChanges();
  
    let dom: HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let itemList :NodeListOf<Element> = dom.querySelectorAll("app-view-recipe");
    expect(itemList.length).toBe(0);
  
  });

  //test that it calls other componenets correctly.
  it("shows view recipe for defined recipe", () => {
    component.r = new recipe("soup");
    fixture.detectChanges();
  
    let dom: HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let itemList :NodeListOf<Element> = dom.querySelectorAll("app-view-recipe");
    expect(itemList.length).toBe(1);
  
  });

  it("shows view recipe for defined recipe", () => {
    component.r = new recipe("soup");
    fixture.detectChanges();
  
    let dom: HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let itemList :NodeListOf<Element> = dom.querySelectorAll("app-view-recipe");
    expect(itemList.length).toBe(1);
  
  });

  //test functions
  it("test update name", () => {
    component.r = new recipe("");
    component.tempName = "soup";
    component.updateName();
    fixture.detectChanges();
    
    
    expect(component.r.name).toBe("soup");
    expect(component.tempName).toBe(undefined);
  
  });

  it("test new item", () => {
    component.r = new recipe("soup");
    component.item = "carrots";
    component.quantity = 2;
    component.newItem();
    fixture.detectChanges();

    expect(component.r.ingredients.size).toBe(1);
    expect(component.quantity).toBe(0);
    expect(component.item).toBe(undefined);
  
  });

  it("test new instruction", () => {
    component.r = new recipe("soup");
    component.instruction = "boil";
    component.time = 10;
    component.newInstruction();
    fixture.detectChanges();

    expect(component.r.instructions.size).toBe(1);
    expect(component.r.estimatedTime).toBe(10);
    expect(component.instruction).toBe(undefined);
    expect(component.time).toBe(0);
  
  });



  //test buttons

  
  it("test buttons exists", () => {
    component.r = new recipe("soup");
    fixture.detectChanges();

    let dom: HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let instructionButton :NodeListOf<Element> = dom.querySelectorAll(".instruction_button");
    let itemButton :NodeListOf<Element> = dom.querySelectorAll(".item_button");
    let updateButton :NodeListOf<Element> = dom.querySelectorAll(".update_button");
  
    expect(instructionButton.length).toBe(1);
    expect(itemButton.length).toBe(1);
    expect(updateButton.length).toBe(1);
  
  });

  it("test update button", () => {
    component.r = new recipe("soup");
    fixture.detectChanges();
    spyOn(component, 'updateName');
  
    let button = fixture.debugElement.nativeElement.querySelector('.update_button');
    button.click();

    fixture.detectChanges();
  
    fixture.whenStable().then(() => {
      expect(component.updateName).toHaveBeenCalled();
    })
  
  });

  it("test new item button", () => {
    component.r = new recipe("soup");
    fixture.detectChanges();
    spyOn(component, 'newItem');
  
    let button = fixture.debugElement.nativeElement.querySelector('.item_button');
    button.click();

    fixture.detectChanges();
  
    fixture.whenStable().then(() => {
      expect(component.newItem).toHaveBeenCalled();
    })
  
  });

  it("test new instruction button", () => {
    component.r = new recipe("soup");
    fixture.detectChanges();
    spyOn(component, 'newInstruction');
  
    let button = fixture.debugElement.nativeElement.querySelector('.instruction_button');
    button.click();

    fixture.detectChanges();
  
    fixture.whenStable().then(() => {
      expect(component.newInstruction).toHaveBeenCalled();
    })
  
  });


  //test binding through text inputs.
  //to be completed


});


