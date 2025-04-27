import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerhomecomponentComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: SellerAuthComponent,
    path: 'seller-auth',
  },
  {
    component: SellerhomecomponentComponent,
    path: 'seller-home',
    canActivate: [authGuard],
  },
];
