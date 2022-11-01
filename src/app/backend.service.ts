import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }
  createDb(){

    let  recipes =  [
      {  id:  1, title:'Avocado Toast', subtitle: 'einfach, schnell und lecker', date: 'Dec 12, 2017', imgUrl: 'assets/images/1.jpg', description: '<p>Some text.. for recipe 1</p><p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>' },
      {  id:  2, title:'Tomaten Quiche', subtitle: 'mit Basilikumpesto', date: 'Dec 15, 2019', imgUrl: 'assets/images/2.jpg', description: '<p>Some text.. for recipe 2</p><p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>' },
      {  id:  3, title:'Assiatische Glasnudelbowl', subtitle: 'mit Aubergine und Sesam', date: 'Feb 21, 2021', imgUrl: 'assets/images/3.jpg', description: '<p>Some text.. for recipe 3</p><p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>' },
      {  id:  4, title:'Warmer Tortillini Salat', subtitle: 'genau das passende für den Winter', date: 'Jan 04, 2022', imgUrl: 'assets/images/4.jpg', description: '<p>Some text.. for recipe 4</p><p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>' }
    ];
 
    return {recipes};
 
   }
}
