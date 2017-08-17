import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
  <h3>New recipe</h3>
  <label>Enter Recipe title:</label>
  <input #newTitle type="text"><br>
  <label>Enter ingredients:</label>
  <input #newIngredients type="text"><br>
  <label>Enter instructions:</label>
  <textarea #newInstructions type="text"></textarea><br>
  <label>Enter level of tastiness</label>
  <select class='form-control' #newTastiness>
    <option [value]="1">1</option>
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
  <button (click)="submitForm(newTitle.value, newIngredients.value, newInstructions.value, newTastiness.value); newTitle.value=''; newIngredients.value=' '; newInstructions.value=''; newTastiness.value='';">Add</button>
  `
})

export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, ingredients: string, instructions: string, tastiness: number) {
    var ingredientArray = ingredients.split(', ')
    var newRecipeToAdd: Recipe = new Recipe(title, tastiness, ingredientArray, instructions);
    this.newRecipeSender.emit(newRecipeToAdd);
  }
}
