import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'recipe-list',
  template: `
  <select (change)='onChange($event.target.value)'>
      <option value="allRecipes">All Recipes</option>
      <option value="usedRecipes">Used Recipes</option>
      <option value="unusedRecipes" selected="selected">Unused Recipes</option>
    </select>
  <ul>
    <li [class]="tastinessColor(currentRecipe)" (click)='isUsed(currentRecipe)' *ngFor="let currentRecipe of childRecipeList | used:filterByUsed">
      {{currentRecipe.title}}-- {{currentRecipe.tastiness}}/10
      <button (click)='editButtonHasBeenClicked(currentRecipe)' class='btn btn-info'>Edit</button>
      <input *ngIf="currentRecipe.used === true" type="checkbox" checked (click)="toggleUsed(currentRecipe, false)"/>
       <input *ngIf="currentRecipe.used === false" type="checkbox" (click)="toggleUsed(currentRecipe, true)"/>
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

  filterByUsed: string = 'unusedRecipes';
  isUsed(clickedRecipe: Recipe){
    if(clickedRecipe.used === true) {
      alert('this recipe has been used');
    } else {
      alert('this recipe has not been used');
    }
  }
  onChange(optionForMenu) {
    this.filterByUsed = optionForMenu;
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
  toggleUsed(clickedRecipe: Recipe, setUsed: boolean) {
   clickedRecipe.used = setUsed;
 }
}
