import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermoduleRoutingModule } from './usermodule-routing.module';
import { UsermoduleComponent } from './usermodule.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsermoduleComponent,
    ProfileupdateComponent,
    ChangepasswordComponent,
  ],
  imports: [
    CommonModule,
    UsermoduleRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    UsermoduleComponent,
    ProfileupdateComponent,
    ChangepasswordComponent
  ]

})
export class UsermoduleModule { }
