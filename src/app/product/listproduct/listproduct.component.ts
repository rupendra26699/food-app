import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/authmodule/api.service';
import { Food } from './food';



@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})


export class ListproductComponent implements OnInit {
  dataSource:any = [];
  

  updatedata = [];
  displayedColumns: string[] = ['name', 'type' ,'actions'];

  constructor(private api : ApiService,private router : Router) { }

  ngOnInit(): void {
    this.getFood();
  }
  getFood(){
    this.api.getFood().subscribe(res=>{
      this.dataSource = res;
    })
  }
  edit(id: any)
  {
      this.router.navigate(['/users/products/edit-products' , id]);
  }

  delete(id:any){

    this.api.deleteFood(id).subscribe(()=>{
      alert("food item deleted successfully");
     this.dataSource= this.getFood();
    })
  }
}
