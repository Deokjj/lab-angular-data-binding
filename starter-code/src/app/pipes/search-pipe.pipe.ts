//Once pipe is created, can be used in components without "manually linking"

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

           //array object to search
                      // searchInput
  transform(foods: any, searchInput: string): any {
    //if foods does not exist just return empty arr
    if(!foods){
      return[];
    }
    //if nothing has been input in search input return the whole array (display all)
    if(!searchInput){
      return foods;
    }

    let results=[];// initializing result array

    foods.forEach((food)=>{
      if( food.name.toLowerCase().includes( searchInput.toLowerCase() ) ){
        results.push(food);
      }
    });

    return results;
  }

}
