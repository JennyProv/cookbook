import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  API_URL: string = "/api/";

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Object> {    
   return this.http.get(this.API_URL + 'recipes')
  }

  getRecipe(id: any) {
   return this.http.get(`${this.API_URL + 'recipes'}/${id}`) 
  }
}
