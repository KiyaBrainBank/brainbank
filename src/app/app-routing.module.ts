import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './pages/layouts/layouts.component';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'dashboard'},
  {
    path: '',
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
    component: LayoutsComponent,
    data: {
        layout: 'classic'
    },
    children: [
      {path: 'dashboard', loadChildren: () => import('./pages/brainbank/dashboard/dashboard.module').then((m)=> m.DashboardModule)},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
