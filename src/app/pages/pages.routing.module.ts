import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page1Component } from './dashboard/page1/page1.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { SharedModule } from '../shared/shared.module';
import { EstadisticaComponent } from './dashboard/estadistica/estadistica.component';

const pagesRoutes : Routes = [
{   path:'', 
    component: DashboardComponent,
    children :[
        { path:'page1', component: Page1Component },
        { path:'detail', component: DetailComponent },
        { path:'estadistica', component: EstadisticaComponent },
    ] 
},



]

@NgModule({
declarations: [
    DashboardComponent,
    Page1Component,
    DetailComponent,
    EstadisticaComponent
],
imports: [
    SharedModule,
    RouterModule.forChild(pagesRoutes)
],

exports:[
    DashboardComponent,
    RouterModule
]
})

export class pagesRoutingModule {}