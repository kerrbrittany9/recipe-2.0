import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
  <h1>My Recipes</h1>
  <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="tastinessColor(currentRecipe)" (click)='isUsed(currentRecipe)'                 *ngFor="let currentRecipe of recipes">
        {{currentRecipe.title}}-- {{currentRecipe.tastiness}}/10
        <button (click)='editRecipe(currentRecipe)' class='btn btn-info'>Edit</button>
        <ul  *ngFor="let currentIngredient of currentRecipe.ingredients">
          <li>{{currentIngredient}}</li>
        </ul>
        {{currentRecipe.instructions}}
      </li>
    </ul>
    <hr>
    <div *ngIf='selectedRecipe'>
      <h3>{{selectedRecipe.title}}</h3>
      <p>Recipe has been used? {{selectedRecipe.used}}</p>
      <h3>Edit recipe</h3>
      <label>Enter Recipe title:</label>
      <input [(ngModel)]="selectedRecipe.title" type="text"><br>
      <label>Enter ingredients:</label>
      <input [(ngModel)]="selectedRecipe.ingredients" type="text"><br>
      <label>Enter instructions:</label>
      <textarea [(ngModel)]="selectedRecipe.instructions" type="text"></textarea><br>
      <label>Enter level of tastiness</label>
      <select class='form-control' [(ngModel)]="selectedRecipe.tastiness">
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
      <button (click)='finishedEditing()'>Save</button>
  </div>
  `
})


export class AppComponent {
  currentFocus: string = 'Delicious stuff';
  recipes: Recipe[] = [
    new Recipe('Cereal', 7, ['cereal', 'milk', 'bowl'], 'Pour cereal in a bowl, pour milk over cereal, eat cereal, learn how to cook a real meal'),
    new Recipe('Toast', 3, ['bread', 'butter', 'grape jelly', 'red pepper flakes'], 'Toast the bread, then spread on butter and grape jelly. Next, sprinkle on some red pepper flakes. It sounds weid, but it\'s amazing.'),
    new Recipe('Bologna sandwich', 5, ['bread', 'mayo', 'tomato', 'lettuce', 'pickle', 'cheese'], 'spread mayo on the bread, and place the bologna on one slice. Top with cheese, lettuce, pickle, and tomato. Finally, evaluate your life choices that have brought you to this.') ];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
  isUsed(clickedRecipe: Recipe){
    if(clickedRecipe.used === true) {
      alert('this recipe has been used');
    } else {
      alert('this recipe has not been used');
    }
  }
  finishedEditing() {
    this.selectedRecipe = null;
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

export class Recipe {
  public used: boolean = false;
  constructor(public title: string, public tastiness: number, public ingredients: string[], public instructions: string) { }
}
