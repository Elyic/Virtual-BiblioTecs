
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pagesRoutingModule } from './pages.routing.module';

// import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { DetailComponent } from './dashboard/detail/detail.component';


@NgModule({
  declarations: [
    // DashboardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    pagesRoutingModule
  ]
})
export class PagesModule { }
