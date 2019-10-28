import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { authRoutingModule } from './auth.routing.module';
// Social Login



@NgModule({
  declarations: [
    // LoginComponent,
    // RegisterComponent
  ],
  imports: [
    CommonModule,
    authRoutingModule,

  ],
  exports:[
    // LoginComponent,
    // RegisterComponent
  ],
  providers: [

  ],
})
export class AuthModule { }
