import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data:any
  instructionModalreferences = null;
  constructor(private homeservice:HomeService,private spinner: NgxSpinnerService,private modalService: NgbModal,private router: Router) {
    // this.spinner.show();
    this.homeservice.homepage().subscribe(
      response => {
        this.data = response;
        // this.spinner.hide();
      })
   }

  ngOnInit(): void {
  }
  openDialog(a) {
    this.spinner.show()
    this.instructionModalreferences = this.modalService.open(a, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'xl',
    })
    this.spinner.hide()
    }
    login(){
      this.router.navigate(['/login']);
    }
    closeinstruction(){
      this.instructionModalreferences.close()
    }
}
