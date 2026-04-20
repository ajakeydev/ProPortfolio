import { Routes } from '@angular/router';
// import { Landing } from './pages/landing/landing';
// import { HomePage } from './pages/home-page/home-page';
// import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { 
        path: 'home', loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage)
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
    {
        path: 'landing',
        loadComponent: () => import('./pages/landing/landing').then(m => m.Landing)
    },
    {
        path: '**', loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
        title: '404 - Page Not Found'
    }
];
