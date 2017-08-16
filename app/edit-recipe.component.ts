import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe} from './recipe.model';

@Component({
  selector: 'edit-recipe',
  template: `
    <div *ngIf='childSelectedRecipe'>
      <h3>{{childSelectedRecipe.title}}</h3>
      <p>Recipe has been used? {{childSelectedRecipe.used}}</p>
      <h3>Edit recipe</h3>
      <label>Enter Recipe title:</label>
      <input [(ngModel)]="childSelectedRecipe.title" type="text"><br>
      <label>Enter ingredients:</label>
      <input [(ngModel)]="childSelectedRecipe.ingredients" type="text"><br>
      <label>Enter instructions:</label>
      <textarea [(ngModel)]="childSelectedRecipe.instructions" type="text"></textarea><br>
      <label>Enter level of tastiness</label>
      <select class='form-control' [(ngModel)]="childSelectedRecipe.tastiness">
        <option  [value]="1">1</option>
        <option [value]="2">2</option>
        <option [value]="3">3</option>
        <option [value]="4">4</option>
        <option [value]="5">5</option>
        <option [value]="6">6</option>
        <option [value]="7">7</option>
        <option [value]="8">8</option>
        <option [value]="9">9</option>
        <option [value]="10">10</option>
      </select>
      <button (click)='doneButtonClicked()'>Done</button>
    </div>
    `
})

export class EditRecipeComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();


  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
