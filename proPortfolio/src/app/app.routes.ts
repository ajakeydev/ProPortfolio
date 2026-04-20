import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { NotFound } from './pages/not-found/not-found';
import { signal } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/landing',
        pathMatch: 'full'
    },
    { 
        path: 'home', loadComponent: () => import('./pages/home-page/home-page').then(m => m.HomePage)
    },
    {
        path: '**', loadComponent: () => import('./pages/not-found/not-found').then(m => m.NotFound),
        title: '404 - Page Not Found'
    }
];
