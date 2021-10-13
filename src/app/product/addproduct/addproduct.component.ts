import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/authmodule/api.service';
import { Food } from '../listproduct/food';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  addfoodForm = new FormGroup({
    foodname : new FormControl('',Validators.required),
    foodtype : new FormControl('', Validators.required)
  })
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  addFood(){
    let data : Food = this.addfoodForm.value;
    if(this.addfoodForm.valid)
    {
      this.api.addFood(data).subscribe(res=>
        {
          alert("food added successfully");
          this.addfoodForm.reset();
          this.router.navigate(['users/products/list-of-products']);
        })
    }
  }

}
