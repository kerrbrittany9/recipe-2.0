import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'recipe-list',
  template: `
  <ul>
    <li [class]="tastinessColor(currentRecipe)" (click)='isUsed(currentRecipe)' *ngFor="let currentRecipe of childRecipeList">
      {{currentRecipe.title}}-- {{currentRecipe.tastiness}}/10
      <button (click)='editButtonHasBeenClicked(currentRecipe)' class='btn btn-info'>Edit</button>
      <ul  *ngFor="let currentIngredient of currentRecipe.ingredients">
        <li>{{currentIngredient}}</li>
      </ul>
      {{currentRecipe.instructions}}
    </li>
  </ul>
  `
})

export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  isUsed(clickedRecipe: Recipe){
    if(clickedRecipe.used === true) {
      alert('this recipe has been used');
    } else {
      alert('this recipe has not been used');
    }
  }
  editButtonHasBeenClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }
  tastinessColor(currentRecipe) {
    if(currentRecipe.tastiness > 6){
      return "bg-success";
    } else if(currentRecipe.tastiness < 4) {
      return "bg-danger";
    } else {
      return "bg-warning";
    }
  }
}
