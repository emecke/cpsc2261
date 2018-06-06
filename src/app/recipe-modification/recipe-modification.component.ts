import { Component, OnInit, Input } from '@angular/core';
import { recipe } from '../recipe.class';
import { ingredient } from '../ingredient.class';

@Component({
  selector: 'app-recipe-modification',
  templateUrl: './recipe-modification.component.html',
  styleUrls: ['./recipe-modification.component.css']
})
export class RecipeModificationComponent implements OnInit {

  @Input('r') r: recipe;
  @Input('showModify') showModify: boolean;
  tempName: string = undefined;
  item: string = undefined;
  quantity: number = 0;
  instruction: string;
  time: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  updateName() {
    if(this.tempName !== undefined){
      this.r.name = this.tempName;
      this.tempName = undefined;
    }
  }

  newItem() {
    if (this.item !== undefined) {
      this.r.addItem(this.item, this.quantity);
    }

    //reset for next item.
    this.quantity = 0;
    this.item = undefined;
    
  }

  newInstruction() {
    if (this.instruction !== undefined) {
      this.r.addInstruction(this.instruction, this.time);
    }
    //reset
    this.time = 0;
    this.instruction = undefined;
  }

}
