import { Routes } from '@angular/router';

export const routes: Routes = [
  // { path: '', redirectTo: '/pl.0ef59752c0cd457dbf1391f08cbd936f', pathMatch: 'full' },
  { path: '', redirectTo: '/12', pathMatch: 'full' },

  {
    path: ':id',
    loadComponent: () =>
      import('./pages/browse/browse.component').then((m) => m.BrowseComponent),
  },

];
