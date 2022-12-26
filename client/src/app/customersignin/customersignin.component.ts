import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserInfoService } from '../services/user-info.service';
import { UserDetails } from '../sharedModels/userDetails.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { FlashMessagesService } from 'angular2-flash-messages';
import { CustomersigninService } from './service/customersignin.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-customersignin',
  templateUrl: './customersignin.component.html',
  styleUrls: ['./customersignin.component.scss'],
  animations: [
    trigger("cardFlip", [
      state(
        "default",
        style({
          transform: "none"
        })
      ),
      state(
        "flipped",
        style({
          transform: "rotateY(180deg)"
        })
      ),
      state(
        "matched",
        style({
          visibility: "false",
          transform: "scale(0.05)",
          opacity: 0
        })
      ),
      transition("default => flipped", [animate("400ms")]),
      transition("flipped => default", [animate("400ms")]),
      transition("* => matched", [animate("400ms")])
    ])
  ]
})


export class CustomersigninComponent implements OnInit {
 emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
 show = false;
  matcher = new MyErrorStateMatcher();
  constructor(private customersigninService: CustomersigninService, private userDetailService: UserInfoService, private router: Router,private spinner: NgxSpinnerService, private _flashMessagesService: FlashMessagesService) { }

  ngOnInit(): void {
  }
  password1 = 'password';
  username: string = "";
  password: string = "";
  department: string = "Staff";
  errorMsg: string = "";
  user: UserDetails;
  onClick() {
    if (this.show == false) {
      this.password1 = 'text';
      this.show = true;
    } else {
      this.password1 = 'password';
      this.show = false;
    }
  }
  sub() {
    this.spinner.show();
    if (this.username == "") {
      //Please Enter UserName.
      this.errorMsg = "பயனர்பெயரை உள்ளிடவும்";
      this.spinner.hide();
    } else if (this.password == "") {
      //Please Enter Password
      this.errorMsg = "கடவுச்சொல்லை உள்ளிடவும்";
      this.spinner.hide();
    }  else {
      console.log(this.username,this.password)
        var hi={
          'username':this.username, 
          'password':btoa(this.password)
        }
        console.log(hi)
        this.customersigninService.login_customer(hi).subscribe(
          res => {
            console.log(res.aap_type);
            if (res.aap_type == "admin") {
              this.errorMsg = "User Logged  In";
              this.username = "";
              this.password = "";
              var user = {

                "aap_ids":res.aap_ids,
                "aap_name":res.aap_name,  
                "aap_name_english":res.aap_name_english,
                "aap_username":res.aap_username, 
                "aap_address":res.aap_address,
                "aap_town":res.aap_town,
                "aap_contact":res.aap_contact,
                "aap_profile":res.aap_profile,
                "aap_type":res.aap_type,
                "aap_photo":res.aap_photo,
                "activation_status":res.activation_status,
                "token":res.token
              }
              this.user = user;
              this.userDetailService.setUserDetails(this.user);
              this._flashMessagesService.show('Welcome '+res.employee_name+'!!', { cssClass: 'alert-success', timeout: 3000 });
              this.router.navigateByUrl('admin');
              this.spinner.hide();
              
            }
            else if (res.aap_type == "author" || res.aap_type == "publisher" || res.aap_type == "artist") {
              this.errorMsg = "User Logged  In";
              this.username = "";
              this.password = "";
              var user = {
                "aap_ids":res.aap_ids,
                "aap_name":res.aap_name,  
                "aap_name_english":res.aap_name_english,
                "aap_username":res.aap_username, 
                "aap_address":res.aap_address,
                "aap_town":res.aap_town,
                "aap_contact":res.aap_contact,
                "aap_profile":res.aap_profile,
                "aap_type":res.aap_type,
                "aap_photo":res.aap_photo,
                "activation_status":res.activation_status,
                "token":res.token
              }
              this.user = user;
              this.userDetailService.setUserDetails(this.user);
              this._flashMessagesService.show('Welcome '+res.employee_name+'!!', { cssClass: 'alert-success', timeout: 3000 });
              this.router.navigateByUrl('user');
              this.spinner.hide();
              

            }else {
              this.errorMsg = "Invalid Credentials"
              this.spinner.hide();
              this._flashMessagesService.show("Invalid Credentials", { cssClass: 'alert-danger', timeout: 3000 });

            }

          }, (err) => {
            console.log(err.error);
            if (err.error == "user not  activated") {
              this.errorMsg = "User has not been Activated yet.";
              this.spinner.hide();
              this._flashMessagesService.show("User has not been Activated yet.", { cssClass: 'alert-danger', timeout: 3000 });

            } else {
              this.errorMsg = "Invalid Credentials";
              this.spinner.hide();
              this._flashMessagesService.show("Invalid Credentials", { cssClass: 'alert-danger', timeout: 3000 });

            }
          }
        )


    }

  }

  backtologin(){
    this.router.navigateByUrl('signup');
  }

}

