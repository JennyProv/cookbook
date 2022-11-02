import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-detail-view',
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.css']
})
export class RecipeDetailViewComponent implements OnInit {
  recipe?: Recipe;
  value: boolean = false;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
        this.recipeService.getRecipe(params.get('id')).subscribe(recipe =>{
          this.recipe = recipe;
      })   
      });
  }

  search(){
    this.value = true;
  }

}
