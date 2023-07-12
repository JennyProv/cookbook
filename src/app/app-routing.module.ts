import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { CookingComponent } from './core/components/cooking/cooking.component';
import { BakingComponent } from './core/components/baking/baking.component';
import { AboutComponent } from './core/components/about/about.component';
import { ImpressumComponent } from './core/components/impressum/impressum.component';
import { RecipeDetailViewComponent } from './features/recipes/components/recipe-detail-view/recipe-detail-view.component';
import { BlogComponent } from './core/components/blog/blog.component';

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
    path: 'rezept/:id',
    component: RecipeDetailViewComponent,
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
  {
    path: 'blog',
    component: BlogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
