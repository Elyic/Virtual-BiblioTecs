import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [
    {   path :  'pages', 
        canActivate: [],
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path :  'auth', loadChildren: './auth/auth.module#AuthModule'
    },
    { path :  '**', redirectTo: 'pages'}
]
@NgModule({
imports:[
    RouterModule.forRoot(appRoutes)
],
exports:[
    RouterModule
]
})

export class AppRoutingModule{}