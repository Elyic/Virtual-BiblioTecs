import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import {  FormsModule} from '@angular/forms'

const autRoutes: Routes = [
    {path: 'auth', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
]

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports:[
        RouterModule.forChild(autRoutes)  ,
        FormsModule
    ],
    exports:[
        RouterModule
    ]
})

export class authRoutingModule {}