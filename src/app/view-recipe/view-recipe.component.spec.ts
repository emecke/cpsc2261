import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipeComponent } from './view-recipe.component';
import { recipe } from '../recipe.class';
import { ingredient } from '../ingredient.class';

describe('ViewRecipeComponent', () => {
  let component: ViewRecipeComponent;
  let fixture: ComponentFixture<ViewRecipeComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecipeComponent ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ViewRecipeComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Displays Ingredients List", () => {
    component.showDetails = true;
    component.r = new recipe("chicken soup");
    component.r.addItem("chicken", 1);
    component.r.addItem("noodles", 10);
    
    fixture.detectChanges();

    let dom: HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let itemList :NodeListOf<Element> = dom.querySelectorAll(".recipe_item");
    expect(itemList.length).toBe(component.r.ingredients.size);

  });

  it("Displays Instruction List", () => {
    component.showDetails = true;
    component.r = new recipe("chicken soup");
    component.r.addInstruction("boil chicken", 30);
    component.r.addInstruction("add noodles", 10);
    
    fixture.detectChanges();

    let dom: HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let instructionList :NodeListOf<Element> = dom.querySelectorAll(".recipe_instruction");
    expect(instructionList.length).toBe(component.r.instructions.size); 


  });

  
  it("Shows delete buttons if #edit=true", () => {
    
    component.showDetails = true;
    component.edit = true;

    component.r = new recipe("chicken soup");

    
    component.r.addItem("chicken", 1);
    component.r.addItem("noodles", 10);
    component.r.addInstruction("boil chicken", 30);
    component.r.addInstruction("add noodles", 10);

    fixture.detectChanges();
    
    

    //check for delete button
    let dom: HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let deleteButtons :NodeListOf<Element> = dom.querySelectorAll(".dbutton");
    expect(deleteButtons.length).toBe(component.r.ingredients.size + component.r.instructions.size); 



    
  });
  
  it("default hides delete buttons", () => {
    component.showDetails = true;
    component.r = new recipe("chicken soup");
    component.r.addItem("chicken", 1);
    component.r.addItem("noodles", 10);
    component.r.addInstruction("boil chicken", 30);
    component.r.addInstruction("add noodles", 10);

    fixture.detectChanges();

    expect(component.edit).toBe(false);

    //check for line without buttons
    let dom : HTMLElement= fixture.debugElement.nativeElement; //component as HTML element
    let deleteButtons : NodeListOf<Element> = dom.querySelectorAll(".dbutton");
    expect(deleteButtons.length).toBe(0);    

    expect(component.edit).toBe(false);
  });

  it("#removeItem() removes item from ingredients list", () => {
    component.r = new recipe("chicken soup");
    component.r.addItem("chicken", 1);
    component.r.addItem("noodles", 10);
    component.removeitem(component.r.ingredients.get("noodles"));
    expect(component.r.ingredients.has("noodles")).toBe(false);
  });

  it("#removeInstructions() removes instruction from instruction list", () => {
    component.r = new recipe("chicken soup");
    component.r.addInstruction("boil chicken", 30);
    component.r.addInstruction("add noodles", 10);
    component.removeInstruction("add noodles");
    expect(component.r.instructions.has("add noodles")).toBe(false);
    
  });

  it('test delete item button', () => {
    component.showDetails=true;
    component.edit=true;
    component.r = new recipe("chicken soup");
    component.r.addItem("noodles", 10);
    fixture.detectChanges();

    spyOn(component, 'removeitem');
  
    let button = fixture.debugElement.nativeElement.querySelector('.dbutton');
    button.click();

    fixture.detectChanges();
  
    fixture.whenStable().then(() => {
      expect(component.removeitem).toHaveBeenCalled();
    })
  });


});