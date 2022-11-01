import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CookingComponent } from './cooking/cooking.component';
import { BakingComponent } from './baking/baking.component';
import { AboutComponent } from './about/about.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: HomeComponent,
  },
  {
    path: 'kochnische',
    component: CookingComponent,
  },
  {
    path: 'rezept/:name',
    component: RecipeComponent,
  },
  {
    path: 'backstube',
    component: BakingComponent,
  },
  {
    path: 'ueberuns',
    component: AboutComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
