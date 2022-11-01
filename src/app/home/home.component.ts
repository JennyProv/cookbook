import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];
  testMarkup: SafeHtml;
  public value: boolean = false;

  constructor(private recipeService: RecipeService, private sanitized: DomSanitizer) {
    this.testMarkup = ''; 
  }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data : any)=>{
      this.recipes = data;
      for (let i = 0; i < this.recipes.length; i++) {
        this.recipes[i].description = this.sanitized.bypassSecurityTrustHtml(this.recipes[i].description);
      }
  })
  }

  search(){
    this.value = true;
  }
}