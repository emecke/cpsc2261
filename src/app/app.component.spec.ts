import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RecipeDeletionComponent } from './recipe-deletion/recipe-deletion.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeModificationComponent } from './recipe-modification/recipe-modification.component';
import { ViewRecipeComponent } from './view-recipe/view-recipe.component';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      //in a big program this is a subset
      declarations: [
        AppComponent,
        RecipeListComponent,
        NewRecipeComponent,
        RecipeModificationComponent,
        RecipeDeletionComponent,
        ViewRecipeComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance; //instance of app component, was app created successfully?
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('My Recipes');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to My Recipes!');
  }));
});
