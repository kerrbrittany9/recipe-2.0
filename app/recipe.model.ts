export class Recipe {
  public used: boolean = false;
  constructor(public title: string, public tastiness: number, public ingredients: string[], public instructions: string) { }
}
