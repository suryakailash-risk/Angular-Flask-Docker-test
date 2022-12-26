import { Injectable } from '@angular/core';
import { UserDetails } from '../sharedModels/userDetails.model'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private userDetail = new BehaviorSubject<UserDetails>(new UserDetails());
  private userDetailObject : UserDetails;

  constructor() { 
    this.userDetailObject = new UserDetails();
  }

  setUserDetails(userDetail : UserDetails) {
    this.userDetail.next(userDetail);
    this.userDetailObject = userDetail;
    
  }

  getUserDetails() : Observable<UserDetails> {
    return this.userDetail.asObservable();
  }

  getUserDetailObject() {
    return this.userDetailObject;
  }

  clearUser() {
    this.userDetail.next(new UserDetails());
    this.userDetailObject = undefined;
    localStorage.removeItem('userDetailObject');
    localStorage.removeItem('userTypelist');
    //localStorage.removeItem('val');
  }
}
