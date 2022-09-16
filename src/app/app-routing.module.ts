import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './pages/auth/guards/auth.guard';
import { NoAuthGuard } from './pages/auth/guards/noAuth.guard';
import { LayoutsComponent } from './pages/layouts/layouts.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'dashboard'},
  {
    path: '',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    component: LayoutsComponent,
    data: {
        layout: 'empty'
    },
    children: [
      {path: 'login', loadChildren: () => import('./pages/brainbank/pre-login/login/login.module').then((m)=> m.LoginModule)},
    ]
  },
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: LayoutsComponent,
    data: {
        layout: 'classic'
    },
    children: [
      {path: 'dashboard', loadChildren: () => import('./pages/brainbank/dashboard/dashboard.module').then((m)=> m.DashboardModule)},
      {path:'atm',loadChildren: () => import('./pages/brainbank/atmdetails/atmdetails.module').then(m => m.AtmdetailsModule) },
      {path:'digitalpayment',loadChildren: () => import('./pages/brainbank/digitalpayment/digitalpayment.module').then(m => m.DigitalpaymentModule) }
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
