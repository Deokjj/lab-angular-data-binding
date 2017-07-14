import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods :Object[];
  serachInput: string = "";
  addFormShown: boolean = false;
  nameInput: string ="";
  caloriesInput: number;
  imageInput: string="";
  totalCal: number=0;
  foodsChosen:Object[] =[];

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  addFormToggle(){
    if(!this.addFormShown){
      this.addFormShown = true;
    }
    else{
      this.addFormShown = false;
    }
    console.log(this.addFormShown);
  }

  newFoodSubmission(myForm){
    const newFood ={
      name: this.nameInput,
      calories: this.caloriesInput,
      image: this.imageInput,
      quantity: 0
    }
    this.foods.push(newFood);
    console.log(myForm);
    console.log(this.foods);
  }

  addThis(food:any, numberOfThis : number){
    food.quantity = numberOfThis;
    console.log(food);
    this.foodsChosen.push(food);
    this.totalCal += food.calories*food.quantity; 
  }
}
