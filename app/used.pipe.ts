import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './recipe.model';

@Pipe({
  name: 'used',
  pure: false
})

export class UsedPipe implements PipeTransform {

  transform(input: Recipe[], desiredUsed) {
    var output: Recipe[] = [];
    if(desiredUsed === 'unusedRecipes'){
      for (var i = 0; i < input.length; i++) {
        if (input[i].used === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredUsed === 'usedRecipes') {
      for (var i = 0; i < input.length; i++) {
        if (input [i].used === true) {
          output.push(input[i])
        }
      }
      return output;
    } else {
    return input;
    }
  }
}
