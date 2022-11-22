import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [ 

  {
    path: 'add-pizza',
    loadChildren: () => import('./pages/add-pizza/add-pizza.module').then( m => m.AddPizzaPageModule)
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'connection',
    loadChildren: () => import('./pages/connection/connection.module').then( m => m.ConnectionPageModule),canActivate:[LoginGuard]
  },
  {
    path: 'commands',
    loadChildren: () => import('./pages/commands/commands.module').then( m => m.CommandsPageModule)
  },
  {
    path: 'menu-cart',
    loadChildren: () => import('./pages/menu-cart/menu-cart.module').then( m => m.MenuCartPageModule)
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),canActivate:[AuthGuard]
  },
 
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'gallery-photo',
    loadChildren: () => import('./pages/gallery-photo/gallery-photo.module').then( m => m.GalleryPhotoPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
