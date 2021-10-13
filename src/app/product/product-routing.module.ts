import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {path:'' , component:ProductComponent ,children:[
    {path :'list-of-products' , component:ListproductComponent},
    {path : 'add-products' , component : AddproductComponent},
    {path : 'edit-products/:id' , component: EditproductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
