import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
  <h1>My Recipes</h1>
  <h3>{{currentFocus}}</h3>
  <recipe-list [childRecipeList]='masterRecipeList' (clickSender)='editRecipe($event)'></recipe-list>
    <hr>
    <edit-recipe [childSelectedRecipe]="selectedRecipe"  (doneButtonClickedSender)="finishedEditing()"></edit-recipe>
    <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Delicious stuff';
  masterRecipeList: Recipe[] = [
    new Recipe('Cereal', 7, ['cereal', 'milk', 'bowl'], 'Pour cereal in a bowl, pour milk over cereal, eat cereal, learn how to cook a real meal'),
    new Recipe('Toast', 3, ['bread', 'butter', 'grape jelly', 'red pepper flakes'], 'Toast the bread, then spread on butter and grape jelly. Next, sprinkle on some red pepper flakes. It sounds weid, but it\'s amazing.'),
    new Recipe('Bologna sandwich', 5, ['bread', 'mayo', 'tomato', 'lettuce', 'pickle', 'cheese'], 'spread mayo on the bread, and place the bologna on one slice. Top with cheese, lettuce, pickle, and tomato. Finally, evaluate your life choices that have brought you to this.') ];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
  finishedEditing() {
    this.selectedRecipe = null;
  }
  addRecipe(newRecipeFromChild: Recipe) {
    this.masterRecipeList.push(newRecipeFromChild);
  }
}
