import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Holiday } from './holiday/holiday';
import { Localmap } from './localmap/localmap';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'holiday', component: Holiday },
  { path: 'localmap', component: Localmap },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
