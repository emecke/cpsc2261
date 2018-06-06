import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipeComponent } from './view-recipe.component';
import { recipe } from '../recipe.class';
import { ingredient } from '../ingredient.class';

describe('ViewRecipeComponent test 2', () => {
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

    
    //console.log("test1",component.r.ingredients);
    //console.log("test2",component.r.getArrayIngredients);
    
    /*
    fixture.detectChanges();
    

    
    fixture.detectChanges();
  
    
    
    
    
    */
   

  });
});