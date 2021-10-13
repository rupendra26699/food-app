import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/authmodule/api.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  changepass = new FormGroup({
    password:new FormControl(),
    confirmpassword : new FormControl()
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  updatepass(){
    
  }

}
