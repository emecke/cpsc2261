import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../recipe.class';
import { ingredient } from '../ingredient.class';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {

  @Input() r: recipe;
  @Input() showDetails: boolean;
  @Input() edit: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  removeitem(i: ingredient) {
    this.r.ingredients.delete(i.name);
  }

  removeInstruction(i: string) {
    this.r.estimatedTime -= this.r.instructions.get(i);
    this.r.instructions.delete(i);
  }

}
