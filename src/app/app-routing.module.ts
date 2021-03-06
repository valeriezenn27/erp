/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      { path: '', redirectTo: 'erp', pathMatch: 'full' },
      { path: 'erp', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      // { path: '', redirectTo: 'erp', pathMatch: 'full' },
      { path: 'erp', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
