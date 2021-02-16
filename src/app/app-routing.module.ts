import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: HomeComponent,
  }/* ,
  {
    path: 'kochnische',
    component: cookingComponent,
  },
  {
    path: 'backstube',
    component: bakingComponent,
  },
  {
    path: 'ueberuns',
    component: aboutComponent,
  },
  {
    path: 'impressum',
    component: impressumComponent,
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
