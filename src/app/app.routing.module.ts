import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { DetailComponent } from './pages/dashboard/detail/detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authRoutingModule } from './auth/auth.routing.module';
import { Page1Component } from './pages/dashboard/page1/page1.component';


// const appRoutes: Routes = [
    // {   path :  'pages', 
    //     canActivate: [],
    //     loadChildren: './pages/pages.module#PagesModule'
    // },
    // { path :  'auth', loadChildren: './auth/auth.module#AuthModule'
    // },
    // { path :  '**', redirectTo: 'pages'}
    const appRoutes: Routes = [
        {   path: '',
            component: DashboardComponent,
            children : [
                // {path: 'auth',  component : LoginComponent, },
                 {path: '',  component : DetailComponent, },
                { path: 'detail', component: DetailComponent },
                {path: 'page1', component: Page1Component},
            ]
        },
    // {path: 'auth',  component : LoginComponent, },
    // {path: '',  component : LoginComponent, },
    // { path:'detail', component: DetailComponent },
]
@NgModule({
imports: [
    RouterModule.forRoot(appRoutes),
    authRoutingModule
],
exports:[
    RouterModule
]
})

export class AppRoutingModule{}