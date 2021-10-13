import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'login' , component:LoginComponent},
  {path:'signup' ,component:SignupComponent},
  { path: 'users' , loadChildren: () => import('../usermodule/usermodule.module').then(m => m.UsermoduleModule) , canActivate:[AuthguardGuard]},
   ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthmoduleRoutingModule { }
