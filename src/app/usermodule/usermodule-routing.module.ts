import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { UsermoduleComponent } from './usermodule.component';

const routes: Routes = [
  {path:'' , component : UsermoduleComponent,children:[
    {path: 'profile-update' , component : ProfileupdateComponent},
    {path: 'change-password' , component: ChangepasswordComponent},
    {path:'products' , loadChildren: ()=>import('../product/product.module').then(m => m.ProductModule)}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermoduleRoutingModule { }
