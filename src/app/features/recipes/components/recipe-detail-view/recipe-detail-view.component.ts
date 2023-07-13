import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail-view',
  templateUrl: './recipe-detail-view.component.html',
  styleUrls: ['./recipe-detail-view.component.css']
})
export class RecipeDetailViewComponent implements OnInit {
  recipe$!: Observable<Recipe>;
  value: boolean = false;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // router don't need to be unsubscribed because ActivatedRoute unsubscribes all of its subscribers when the component is destroyed 
    this.route.paramMap.subscribe(params => {
        this.recipe$ = this.recipeService.getRecipe(Number(params.get('id')));
      });
  }

  search(){
    this.value = true;
  }
}
