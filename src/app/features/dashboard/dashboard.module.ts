import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { StatComponent } from './stat/stat.component';

@NgModule({
  declarations: [
    DashboardComponent,
    StatComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
  ]
})
export class DashboardModule { }
