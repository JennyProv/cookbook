import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];
  testMarkup: SafeHtml;

  constructor(private recipeService: RecipeService, private sanitized: DomSanitizer, private router: Router) {
    this.testMarkup = ''; 
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data : any)=>{
      this.recipes = data;
      for (let i = 0; i < this.recipes.length; i++) {
        this.recipes[i].shortdescription = this.sanitized.bypassSecurityTrustHtml(this.recipes[i].shortdescription);
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