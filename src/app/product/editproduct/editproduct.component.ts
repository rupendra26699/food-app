import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/authmodule/api.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
editform = new FormGroup({
  foodname : new FormControl(),
  foodtype : new FormControl()
})
  constructor(private api : ApiService ,private router:ActivatedRoute ,private nav:Router) { }

  ngOnInit(): void {
   this.getfood();
  }

  getfood(){
    this.api.getfoodbyid(this.router.snapshot.params.id).subscribe((res:any)=>{
      this.editform = new FormGroup({
        foodname : new FormControl(res['foodname']),
        foodtype : new FormControl(res['foodtype'])
      })

    })
  }
  update(){
    this.api.updateFood(this.router.snapshot.params.id,this.editform.value).subscribe((res)=>{
        alert("food item updated successfully");
        this.nav.navigate(['users/products/list-of-products']);
      })
  }

}


