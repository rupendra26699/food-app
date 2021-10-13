import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  product:any = [];
  authenticate:boolean = false;

  RegisterUsers = "   http://localhost:3000/Registered_Users " ;
  Food = "http://localhost:3000/food";
  id = "http://localhost:3000/id"
  constructor(private http : HttpClient) { }

  registerUser(_data: any){
    return this.http.post(this.RegisterUsers , _data);
  }

  getRegisteredUser(){
    return this.http.get(this.RegisterUsers);
  }

  getFood(){
    return this.http.get(this.Food);
  }
  getfoodbyid(_id: any){
    return this.http.get(this.Food+"/"+_id);
  }
  addFood(_data: any){
    return this.http.post(this.Food , _data);
  }

  updateFood(id:any ,data: any){
    return this.http.put(`${this.Food}/${id}`,data);
  }

  deleteFood(id:any){
    return this.http.delete(`${this.Food}/${id}`);
  }

}
