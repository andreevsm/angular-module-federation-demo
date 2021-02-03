import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'dota',
      loadChildren: () => import('dota/Module').then(m => m.AppModule)
    },
    {
      path: 'pubg',
      loadChildren: () => import('pubg/Module').then(m => m.AppModule)
    },
    {
      path: 'lol',
      loadChildren: () => import('lol/Module').then(m => m.AppModule)
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];

