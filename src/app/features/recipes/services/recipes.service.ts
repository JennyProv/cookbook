import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  API_URL: string = "/api/";

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
      return this.http.get(this.API_URL + 'recipes') as Observable<Recipe[]>
  }

  getRecipe(id: number) : Observable<Recipe> {
   return this.http.get(`${this.API_URL + 'recipes'}/${id}`) as Observable<Recipe>
  }
}
