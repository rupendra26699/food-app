import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { users } from './user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
  username : new FormControl('' , [Validators.required , Validators.minLength(4)]),
  email : new FormControl('', [Validators.required , Validators.email]),
  password : new FormControl('', [Validators.required,Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,8}$/)]),
  confirmpassword : new FormControl('', [Validators.required])
})
 
  
  

  constructor(private api : ApiService , private router : Router) { }

  ngOnInit(): void {

  }
  
  
  onSubmit(){
      let data : users = this.signupForm.value; 
     if(this.signupForm.valid)
     {
      this.api.registerUser(data).subscribe(()=>{
        alert('account created successfully');
        this.signupForm.reset();
        this.router.navigate(['login']);
      });
     }
  }

}
