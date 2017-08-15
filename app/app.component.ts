import { Component } from 'angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
  <h1>My Recipes</h1>
  <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}
        <ul>
          <li>{{currentRecipe.ingredients}}</li>
        </ul>
        {{currentRecipe.instructions}}</li>
  </div>
  `
})


export class AppComponent {
  currentFocus: string = 'Delicious stuff';
  recipes: Recipe[] = [
    new Recipe('Cereal', ['cereal', 'milk', 'bowl'], ['pour cereal in a bowl', 'pur milk over cereal', 'eat cereal', 'learn how to cook a real meal'])
  ]
}

export class Recipe {
  public used: boolean = false;
  constructor(public title: string, public ingredients: string, public instructions: string) { }
}
