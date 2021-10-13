import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  users: any;

  constructor(private api: ApiService , private router:Router ,private rou :ActivatedRoute) { }

  ngOnInit(): void {
    this.reg();
  }

  get f(){
    return this.loginForm.controls;
  }
  reg(){
    this.api.getRegisteredUser().subscribe(res => {
      this.users = res;
    })
  }

  onLogin() {
    if (this.loginForm) {     
        for (const i in this.users) {
          if (this.f.email.value === this.users[i].email && this.f.password.value === this.users[i].password) {
            alert("You have been logged in successfully");
            this.api.authenticate = true;
            // localStorage.setItem("email",this.f.email.value);
            // localStorage.setItem("password",this.f.password.value);
            this.router.navigate(['/users']);
          }
        }
      
    }


  }

}
