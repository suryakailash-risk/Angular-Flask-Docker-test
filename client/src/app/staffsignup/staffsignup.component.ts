import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subscriber } from 'rxjs';
import { StaffsignupService } from './service/staffsignup.service';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-staffsignup',
  templateUrl: './staffsignup.component.html',
  styleUrls: ['./staffsignup.component.scss']
})
export class StaffsignupComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  constructor(private _formBuilder: FormBuilder, private staffSignupService: StaffsignupService, private router: Router, private spinner: NgxSpinnerService, private _flashMessagesService: FlashMessagesService) { }


  ngOnInit(): void {
  }
  password1='password'
  show = false;
  name_english: String = "";
  username: String = "";
  address: String = "";
  town: String = "";
  contact: String = "";
  type: String = "";
  password: String = "";
  confirmpassword: String = "";
  errorMsg: String = "";
  name_tamil:String="";
  imagedataboo:boolean=false;
  imagedata='';
  newimagedataboo:boolean=false;
  myimage!: Observable<any>;
  base64code: any='';
  profile='';

  onClick() {
    if (this.show == false) {
      this.password1 = 'text';
      this.show = true;
    } else {
      this.password1 = 'password';
      this.show = false;
    }
  }
  onSubmit() {
    this.spinner.show();
    if (this.name_tamil == "") {
      this.errorMsg = "Please Enter name_tamil";
      this.spinner.hide();
    } else if (this.name_english == "") {
      this.errorMsg = "Please Enter name_english";
      this.spinner.hide();
    }  else if (this.address == "") {
      this.errorMsg = "Please Enter Address";
      this.spinner.hide();
    } else if (this.town == "") {
      this.errorMsg = "Please Enter town";
      this.spinner.hide();
    } else if (this.contact == "") {
      this.errorMsg = "Please Enter contact";
      this.spinner.hide();
    } else if (this.username == "") {
      this.errorMsg = "Please Enter Username";
      this.spinner.hide();
    }else if (this.password == "") {
      this.errorMsg = "Please Enter password";
      this.spinner.hide();
    } else if (this.confirmpassword == "") {
      this.errorMsg = "Please Enter the password again in confirm password tab";
      this.spinner.hide();
    } else if (this.password.length<8) {
      this.errorMsg = "Password should have 8 characters atleast.";
      this.spinner.hide();
    }  else if (this.password != this.confirmpassword) {
      this.errorMsg = "Password in the above two fields do not match.";
      this.spinner.hide();
    } else if(this.newimagedataboo==true && this.base64code=='') {
      this.errorMsg = "Please select image";
      this.spinner.hide();
    }else {
      if(this.newimagedataboo==true){
      var credentials = {
        "name_english":this.name_english,
        "username":this.username,
        "address":this.address,
        "town":this.town,
        "contact":this.contact,
        "type":this.type,
        "password":this.password,
        "name_tamil":this.name_tamil,
        "profile":this.profile,
        "photo":this.base64code,
        "aap_contact":this.contact
      }
      console.log(credentials)
      this.staffSignupService.checkerusername(credentials).subscribe(
        res => {
          if(res.username=='no'){
      this.staffSignupService.staffSignUp(credentials).subscribe(
        res => {
          console.log(res.message);
          if (res.message == "registeration successfully") {
            this.errorMsg = "Created Successfully,Wait for the Admin's Approval";
            this.name_english='',
            this.username='',
            this.address='',
            this.town='',
            this.contact='',
            this.type='',
            this.password='',
            this.confirmpassword='',
            this.name_tamil=''
            this.newimagedataboo=false,
            this.spinner.hide();
          } else {
            this.errorMsg = "Not able to save the employee details";
            this.spinner.hide();
          }
        },
        (err) => {
          console.log(err);
          if (err.error == "email or username has already been used") {
            this.errorMsg = "Email/UserName already  in use.";
            this.spinner.hide();
          } else {
            this.errorMsg = "Not able to save the employee details";
            this.spinner.hide();
          }

        })
    }
      else{
        this.errorMsg="this username is already taken";
        this.spinner.hide();
      }})}
      else{
      var credentials2 = {
        "name_english":this.name_english,
        "username":this.username,
        "address":this.address,
        "town":this.town,
        "contact":this.contact,
        "type":this.type,
        "password":this.password,
        "name_tamil":this.name_tamil,
        "profile":this.profile,
        "photo":"null",
        "aap_contact":this.contact
      }
      this.staffSignupService.checkerusername(credentials2).subscribe(
        res => {
          if(res.username=='no'){
      this.staffSignupService.staffSignUp(credentials2).subscribe(
        res => {
          console.log(res.message);
          if (res.message == "registeration successfully") {
            this.errorMsg = "Created Successfully,Wait for the Admin's Approval";
            this.name_english='',
            this.username='',
            this.address='',
            this.town='',
            this.contact='',
            this.type='',
            this.password='',
            this.confirmpassword='',
            this.name_tamil=''
            this.newimagedataboo=false,
            this.spinner.hide();
          } else {
            this.errorMsg = "Not able to save the employee details";
            this.spinner.hide();
          }
        },
        (err) => {
          console.log(err);
          if (err.error == "email or username has already been used") {
            this.errorMsg = "Email/UserName already  in use.";
            this.spinner.hide();
          } else {
            this.errorMsg = "Not able to save the employee details";
            this.spinner.hide();
          }

        }
      )}
      else{
        this.errorMsg="this username is already taken";
        this.spinner.hide();
      }
    }
    )
      }}
  }
  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    // console.log(file);
    this.convertToBase64(file)
  };
  onimageload = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.convertToBase64(file)
  };
  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
 
    observable.subscribe((d) => {
      console.log(d)
      this.myimage = d
      this.base64code = d
    })
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);
 
    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }
  reset() {
            this.name_english='',
            this.username='',
            this.address='',
            this.town='',
            this.contact='',
            this.type='',
            this.password='',
            this.profile='',
            this.base64code='',
    this.errorMsg = "";
    this.confirmpassword="";
    this.name_tamil='';
  }

  backtologin(){
    this.router.navigateByUrl('staffsignin');
  }



}
