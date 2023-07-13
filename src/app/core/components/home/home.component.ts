import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../features/recipes/services/recipes.service';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/features/recipes/models/recipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes$: Observable<Recipe[]> = this.recipeService.getRecipes();

  constructor(private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit(): void {

  }

  navigateToRecipe(id : number){
    this.router.navigate(
      [`/rezept/${id}`]
    );
  }
}