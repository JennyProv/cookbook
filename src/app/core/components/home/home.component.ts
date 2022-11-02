import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../features/recipes/services/recipes.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Router } from '@angular/router';
import { Recipe } from 'src/app/features/recipes/models/recipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Recipe[] = [];
  testMarkup: SafeHtml;

  constructor(private recipeService: RecipeService, private sanitized: DomSanitizer, private router: Router) {
    this.testMarkup = ''; 
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data : any)=>{
      this.recipes = data;
      for (let i = 0; i < this.recipes.length; i++) {
        this.recipes[i].shortDescription = this.sanitized.bypassSecurityTrustHtml(this.recipes[i].shortDescription) as unknown as string;
      }
  })
  }

  navigateToRecipe(id : number){
    console.log("given id is: ", id);
    this.router.navigate(
      [`/rezept/${id}`]
    );
  }
}