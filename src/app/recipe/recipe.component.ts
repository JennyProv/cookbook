import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipe: any;
  value: boolean = false;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.recipeService.getRecipe(params.get('id')).subscribe(recipe =>{
          console.log(recipe);
          this.recipe = recipe;
      })   
      });
  }

  search(){
    this.value = true;
  }

}
