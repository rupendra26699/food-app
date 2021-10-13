import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './authmodule/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate{
  constructor(private api :ApiService){}
  canActivate()
  { 
    if(!this.api.authenticate){
      return false;
    }
    return true
  }
    
 
}
