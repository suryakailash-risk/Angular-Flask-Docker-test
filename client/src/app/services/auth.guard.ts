import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserInfoService } from './user-info.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userDetailService: UserInfoService, private router: Router) {
  }

  canActivate(): boolean {


      let userDetail = this.userDetailService.getUserDetailObject();
      
      if(userDetail && userDetail.token) {
          return true;
      } else {
          let userDetail = JSON.parse(localStorage.getItem('userDetailObject'));
          if(userDetail && userDetail.uid) {
              this.userDetailService.setUserDetails(userDetail);
              return true;
          }
      }
      
      this.router.navigateByUrl('login');
      return false;
  }
  
}
