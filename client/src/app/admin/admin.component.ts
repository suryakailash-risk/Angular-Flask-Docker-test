import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subscription, Subscriber, of } from 'rxjs';
import { UserInfoService } from '../services/user-info.service';
import { UserDetails } from '../sharedModels/userDetails.model';
import { AdminoperationsService } from './service/adminoperations.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { saveAs } from "file-saver";
import { environment } from 'src/environments/environment';
import Integer from '@zxing/library/esm/core/util/Integer';
import { EMPTY } from 'rxjs';
import { Binary } from '@angular/compiler';
import { ReplaySubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
// import { Console } from 'console';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})


export class AdminComponent {

  userDetails: UserDetails;
  userDetailSubscription: Subscription;
  page: string = "dashboard";
  visibility: boolean = false;
  category_code = '';
  sidenav: boolean = false;
  staffList: any = [];
  countrylist: any = [];
  id_number: any = '';
  isbn: any = '';
  ccno: any = '';
  // subject:any='';
  subject_code: any = '';
  sub_title: any = '';
  // sub_title_code:any='';
  // title:any='';
  // title_code:any='';
  author: any = '';
  author_code: any = '';
  language: any = '';
  language_code: any = '';
  edition: any = '';
  reprint: any = '';
  year: any = '';
  copy_rights: any = '';
  size: any = '';
  pages: any = '';
  artist: any = '';
  artist_code = '';
  publisher_code: any = '';
  binding: any = '';
  price: any = '';
  weight: any = '';
  annexures: any = '';
  prizes: any = '';
  miscellaneous: any = '';
  prepared_cheched_by = 'hi';
  language_type: any = '';
  referrential_key: any = '';
  Summary_of_the_book = '';
  subject: any;
  selectsubjectModalreferences = null;
  selectcatogoryModalreferences = null;
  selectlanguageModalreferences = null;
  selectpublisherModalreferences = null;
  selectartistModalreferences = null;
  selectauthorModalreferences = null;
  aap_name = '';
  aap_address = '';
  aap_contact = '';
  aap_photo: File = null;
  aap_profile = '';
  aap_name_english = '';
  listofauthor: any;
  listofartist: any;
  listofpublisher: any;
  listoflanguage: any;
  listofsubject: any;
  listofcategory: any;
  editlaguageModalreferences = null;
  editcategoryModalreferences = null;
  editsubjectModalreferences = null;
  editauthorModalreferences = null;
  editartistModalreferences = null;
  editpublisherModalreferences = null;
  title = '';
  language_name = '';
  language_name_english = '';
  category_name = '';
  category_name_english = '';
  subject_name = '';
  subject_name_english = '';
  myimage!: Observable<any>;
  base64code: any =''
  myimage2!: Observable<any>;
  base64code2: any =''
  subject_branch = '';
  subject_topic = '';
  subject_category = '';
  cover_image: any;
  book_pdf: any='';
  searchpublisher = '';
  row = [];
  searchdata = '';
  aap_town = '';
  datavalue: any = {};
  imagedata = ''
  imagedataboo: boolean = false;
  pdfdata = '';
  pdfdataboo: boolean = false;
  status: boolean = false;
  newpdfdataboo: boolean = false;
  newaapdatanewuser: boolean = false;
  newimageaapboo: boolean = false;
  newpassword = ''
  // newimagesdataboo:boolean=false;
  newimagedataboo: boolean = false;
  adminerror = '';
  @ViewChild("takeInput", { static: false })
  // this InputVar is a reference to our input.
  InputVar: ElementRef;
  @ViewChild("takeInput2", { static: false })
  InputVar2: ElementRef;
  displayedColumnsOne = ['title_code', 'author_code', 'publisher_code', 'year', 'actions'];
  dataSourceOne: MatTableDataSource<bookdatas>;
  @ViewChild('TableOnePaginator', { static: false }) tableOnePaginator: MatPaginator;
  @ViewChild('TableOneSort', { static: false }) tableOneSort: MatSort;
  applyFilterOne(filterValue: string) {
    this.dataSourceOne.filter = filterValue.trim().toLowerCase();
  }
  displayedColumnsTwo = ['aap_name', 'aap_name_english', 'aap_town', 'aap_contact', 'actions'];
  dataSourceTwo: MatTableDataSource<aapdatas>;
  @ViewChild('TableTwoPaginator', { static: false }) tableTwoPaginator: MatPaginator;
  @ViewChild('TableTwoSort', { static: false }) tableTwoSort: MatSort;
  applyFilterTwo(filterValue: string) {
    this.dataSourceTwo.filter = filterValue.trim().toLowerCase();
  }
  displayedColumnsThree = ['category_name', 'category_name_english', 'actions'];
  dataSourceThree: MatTableDataSource<categorydatas>;
  @ViewChild('TableThreePaginator', { static: false }) tableThreePaginator: MatPaginator;
  @ViewChild('TableThreeSort', { static: false }) tableThreeSort: MatSort;
  applyFilterThree(filterValue: string) {
    this.dataSourceThree.filter = filterValue.trim().toLowerCase();
  }
  displayedColumnsFour = ['language_name', 'language_name_english', 'actions'];
  dataSourceFour: MatTableDataSource<languagedatas>;
  @ViewChild('TableFourPaginator', { static: false }) tableFourPaginator: MatPaginator;
  @ViewChild('TableFourSort', { static: false }) tableFourSort: MatSort;
  applyFilterFour(filterValue: string) {
    this.dataSourceFour.filter = filterValue.trim().toLowerCase();
  }
  displayedColumnsFive = ['subject_name', 'subject_name_english', 'branch', 'actions'];
  dataSourceFive: MatTableDataSource<subjectdatas>;
  @ViewChild('TableFivePaginator', { static: false }) tableFivePaginator: MatPaginator;
  @ViewChild('TableFiveSort', { static: false }) tableFiveSort: MatSort;
  applyFilterFive(filterValue: string) {
    this.dataSourceFive.filter = filterValue.trim().toLowerCase();
  }

  displayedColumnsSix = ['aap_name', 'aap_name_english', 'aap_contact', 'aap_type', 'activation_status'];
  dataSourceSix: MatTableDataSource<aapdatastotable>;
  @ViewChild('TableSixPaginator', { static: false }) tableSixPaginator: MatPaginator;
  @ViewChild('TableSixSort', { static: false }) tableSixSort: MatSort;
  applyFilterSix(filterValue: string) {
    this.dataSourceSix.filter = filterValue.trim().toLowerCase();
  }
  constructor(private _snackBar: MatSnackBar,private modalService: NgbModal, private fb: FormBuilder, private userDetailService: UserInfoService, private router: Router, private adminService: AdminoperationsService, private spinner: NgxSpinnerService, private _flashMessagesService: FlashMessagesService) {
    this.spinner.show();
    this.userDetailSubscription = this.userDetailService.getUserDetails().subscribe((userDetails) => {
      this.userDetails = userDetails;
    });

    this.getauthordata();
    this.getartistdata();
    this.getpublisherdata();
    this.getlanguagedata();
    this.getcategorydata();
    this.getsubjectdata();
    this.spinner.hide();
  }

  ngOnInit() {

  }

  openDashBoard() {
    this.page = "dashboard";
    this.sidenav = false;
  }
  openViewBooks() {
    this.page = "view_books";
    this.sidenav = false;
  }
  openViewAuthor() {
    this.spinner.show()
    this.page = "view_author";
    this.adminService.getauthor().subscribe(
      response => {
        this.row = response;
        const sale: aapdatas[] = this.row;
        this.dataSourceTwo = new MatTableDataSource(sale);
        this.dataSourceTwo.paginator = this.tableTwoPaginator;
        this.dataSourceTwo.sort = this.tableTwoSort;
        this.spinner.hide();
      })
  }
  openViewPublisher() {
    this.spinner.show()
    this.page = "view_publisher";
    this.adminService.getpublisher().subscribe(
      response => {
        this.row = response;
        const sale: aapdatas[] = this.row;
        this.dataSourceTwo = new MatTableDataSource(sale);
        this.dataSourceTwo.paginator = this.tableTwoPaginator;
        this.dataSourceTwo.sort = this.tableTwoSort;
        this.spinner.hide();
      })
  }
  openViewartist() {
    this.spinner.show()
    this.page = "view_artist";
    this.adminService.getartist().subscribe(
      response => {
        this.row = response;
        const sale: aapdatas[] = this.row;
        this.dataSourceTwo = new MatTableDataSource(sale);
        this.dataSourceTwo.paginator = this.tableTwoPaginator;
        this.dataSourceTwo.sort = this.tableTwoSort;
        this.spinner.hide();
      })
  }
  openViewcategory() {
    this.spinner.show()
    this.page = "view_category";
    this.adminService.getcategory().subscribe(
      response => {
        this.row = response;
        const sale: categorydatas[] = this.row;
        this.dataSourceThree = new MatTableDataSource(sale);
        this.dataSourceThree.paginator = this.tableThreePaginator;
        this.dataSourceThree.sort = this.tableThreeSort;
        this.spinner.hide();
      })
  }

  openViewsubject() {
    this.spinner.show()
    this.page = "view_subject";
    this.adminService.getsubject().subscribe(response => {
      this.row = response;
      const sale: subjectdatas[] = this.row;
      this.dataSourceFive = new MatTableDataSource(sale);
      this.dataSourceFive.paginator = this.tableFivePaginator;
      this.dataSourceFive.sort = this.tableFiveSort;
      this.spinner.hide();
    })

  }
  openViewlanguage() {
    this.spinner.show()
    this.page = "view_language";
    this.adminService.getlanguage().subscribe(response => {
      this.row = response;
      const sale: languagedatas[] = this.row;
      this.dataSourceFour = new MatTableDataSource(sale);
      this.dataSourceFour.paginator = this.tableFourPaginator;
      this.dataSourceFour.sort = this.tableFourSort;
      this.spinner.hide();
    })
  }
  logout() {
    window.location.reload()
  }
  openhelp(){
    this.spinner.show()
    this.page = "help";
    this.spinner.hide()
  }
  submitnewbook() {
    this.spinner.show()
    if(this.isbn==''){
      this.spinner.hide()
      this.adminerror="Enter the isbn"
    }
    else if (this.ccno==''){
      this.spinner.hide()
      this.adminerror="Enter the ccno"
    }
    else if (this.title==''){
      this.spinner.hide()
      this.adminerror="Enter the title"
    }
else if (this.sub_title==''){
  this.spinner.hide()
      this.adminerror="Enter the Subtitle"
    }
    else if (this.subject_code==''){
      this.spinner.hide(); this.adminerror="select the subject"
    }   
    else if (this.language_code==''){
      this.spinner.hide(); this.adminerror="select the language"
    }  
    else if (this.category_code==''){
      this.spinner.hide(); this.adminerror="select the category"
    }
    else if (this.author_code==''){
      this.spinner.hide( ); this.adminerror="select the author"
    }   

    else if (this.artist_code==''){
      this.spinner.hide(); this.adminerror="select the Artist"
    }  
    else if (this.publisher_code==''){
      this.spinner.hide(); this.adminerror="select the publisher"
    }  
    else if (this.size==''){
      this.spinner.hide(); this.adminerror="Enter the size"
    } 
    else if (this.pages==''){
      this.spinner.hide(); this.adminerror="Enter the pages"
    }  
  
     else if (this.edition==''){
      this.spinner.hide(); this.adminerror="Enter the edition"
    }  
     else if (this.reprint==''){
      this.spinner.hide(); this.adminerror="Enter the reprint"
    }  
     else if (this.year==''){
      this.spinner.hide(); this.adminerror="Enter the year"
    }  
     else if (this.copy_rights==''){
      this.spinner.hide(); this.adminerror="Enter the copyrights"
    }  


     else if (this.binding==''){
      this.spinner.hide(); this.adminerror="Enter the binding"
    }  
     else if (this.price==''){
      this.spinner.hide(); this.adminerror="Enter the price"
    }  
     else if (this.weight==''){
      this.spinner.hide(); this.adminerror="Enter the weight"
    }  
     else if (this.annexures==''){
      this.spinner.hide(); this.adminerror="Enter the annexures"
    }  
     else if (this.prizes==''){
      this.spinner.hide(); this.adminerror="Enter the prizes"
    }  
     else if (this.miscellaneous==''){
      this.spinner.hide(); this.adminerror="Enter the miscellaneous"
    }  
     else if (this.Summary_of_the_book==''){
      this.spinner.hide(); this.adminerror="Enter the Summary of the book"
    } 
     else if (this.newpdfdataboo == true && this.book_pdf==''){
      this.spinner.hide(); this.adminerror="Enter the Book PDF"
    }  
     else if (this.newimagedataboo == true && this.base64code==''){
      this.spinner.hide(); this.adminerror="Enter the Cover Picture"
    }  
    else{
      if (this.newimagedataboo == false) {
        this.base64code = 'null'
      }
      if (this.newpdfdataboo == false) {
        this.book_pdf = 'null'
      }
    var databook = {
      "id_number": "null",
      "isbn": this.isbn,
      "ccno": this.ccno,
      "subject_code": this.subject_code,
      "sub_title": this.sub_title,
      "title": this.title,
      "author_code": this.author_code,
      "language_code": this.language_code,
      "edition": this.edition,
      "reprint": this.reprint,
      "year": this.year,
      "copy_rights": this.copy_rights,
      "size": this.size,
      "pages": this.pages,
      "artist_code": this.artist_code,
      "publisher_code": this.publisher_code,
      "binding": this.binding,
      "price": this.price,
      "weight": this.weight,
      "annexures": this.annexures,
      "prizes": this.prizes,
      "miscellaneous": this.miscellaneous,
      "prepared_cheched_by": this.prepared_cheched_by,
      "Summary_of_the_book": this.Summary_of_the_book,
      "book_pdf": this.book_pdf,
      "created_by": String(this.userDetails.aap_ids),
      "type_of_user": 'admin',
      "category": this.category_code,
      "visibility": this.visibility.toString(),
      "cover_image": this.base64code
    }
    this.adminService.checker(databook).subscribe(
      response => {
        if(response.isbn=="no"){
          this.adminerror=''
    this.adminService.postbookdata(databook).subscribe(
      response => {
        if (response) {
          this.reset()
          this.base64code = '';
          this.book_pdf = '';
          this.spinner.hide()
          this.visibility = false
          this.spinner.hide(); this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PBD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BPDB', { cssClass: 'alert-danger', timeout: 3000 });
      }
    )}
    else{
      this.adminerror="This ISBN already exist in our DB"
      this.spinner.hide()
      // this.openSnackBar(this.adminerror, "okay")
    }
      })
    }
   
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  base64Output: string;
  convertFile(file: File): Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;
  }
  onpdfload(event) {
    // this.book_pdf = event.target.files[0];
    this.convertFile(event.target.files[0]).subscribe(base64 => {
      var a = 'data:pdf;base64,'
      this.book_pdf = a.concat(base64.toString());
    });

  }
  // ========================================subject====================
  onsubjectModal(content) {
    this.selectsubjectModalreferences = this.modalService.open(content, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
  }
  onCloseselectsubjectModal() {
    this.selectsubjectModalreferences.close();
    this.subject_name = '';
    this.subject_name_english = '';
    this.subject_branch = '';
  }
  onsubmitsubject() {
    this.spinner.show()
    if(this.subject_name==''){
      this.spinner.hide(); this.adminerror="enter the subject name in tamil"
    }else if (this.subject_name_english==''){
      this.spinner.hide(); this.adminerror="enter the subject name in english"
    }else if (this.subject_branch==""){
      this.spinner.hide(); this.adminerror="enter the subject branch"
    } else{   this.adminerror=''
    var subjectdata = {
      "subject_name": this.subject_name,
      "subject_name_english": this.subject_name_english,
      "branch": this.subject_branch,
      // "topic":this.subject_topic,
      "category": "null",
      "created_by": String(this.userDetails.aap_ids)
    }

    this.adminService.subjectpost(subjectdata).subscribe(
      response => {
        if (response) {
          console.log(response)
          this.onCloseselectsubjectModal()
          this.getsubjectdata();
          this.spinner.hide()
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GSD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BGSD', { cssClass: 'alert-danger', timeout: 3000 });
      })
    }
  }
  getsubjectdata() {
    this.adminerror=''
    this.adminService.getsubject().subscribe(
      response => {
        if (response != '') {
          this.listofsubject = response
          this.spinner.hide(); this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GSD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BGSD', { cssClass: 'alert-danger', timeout: 3000 });
      })
  }


  // =============================category=====================
  oncatogoryModal(content) {
    this.selectcatogoryModalreferences = this.modalService.open(content, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
  }
  onCloseselectcatogorytModal() {
    this.selectcatogoryModalreferences.close();
    this.category_name = '';
    this.category_name_english = ''
  }
  onsubmitcategory() {
    this.spinner.show()    
    if(this.category_name==''){
      this.spinner.hide(); this.adminerror="enter the category name in tamil"
    }else if(this.category_name_english==""){
      this.spinner.hide(); this.adminerror="enter the category name in english"
    }
    else{
    var categorydata = {
      "category_name": this.category_name,
      "category_name_english": this.category_name_english,
      "created_by": String(this.userDetails.aap_ids)
    }

    this.adminerror=''
    this.adminService.categorypost(categorydata).subscribe(
      response => {
        if (response) {
          console.log(response)
          this.onCloseselectcatogorytModal()
          this.getcategorydata();
          this.spinner.hide()
        }
      })
    }
  }
  getcategorydata() {
    this.adminerror=''
    this.adminService.getcategory().subscribe(
      response => {
        if (response != '') {
          this.listofcategory = response
          this.spinner.hide(); this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GCD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BGCD', { cssClass: 'alert-danger', timeout: 3000 });
      })
  }


  // =========================language======================
  onlanguageModal(content) {
    this.selectlanguageModalreferences = this.modalService.open(content, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
  }
  onCloseselectlanguagetModal() {
    this.selectlanguageModalreferences.close();
    this.language_name = '';
    this.language_name_english = '';
  }
  onsubmitlanguage() {
    this.spinner.show()
    if(this.language_name==''){
      this.spinner.hide(); this.adminerror="enter the language name in tamil"
    }else if(this.language_name_english==''){
      this.spinner.hide(); this.adminerror=='enter the language name in english'
    }else{
    this.adminerror=''
    var languagedata = {
      "language_name": this.language_name,
      "language_name_english": this.language_name_english,
      "created_by": String(this.userDetails.aap_ids)
    }
    this.adminService.languagepost(languagedata).subscribe(
      response => {
        if (response) {
          console.log(response)
          this.onCloseselectlanguagetModal()
          this.getlanguagedata();
          this.spinner.hide()
          this.spinner.hide(); this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GSL', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BGSL', { cssClass: 'alert-danger', timeout: 3000 });
      })
    }

  }
  getlanguagedata() {
    this.adminerror=''
    this.adminService.getlanguage().subscribe(
      response => {
        if (response != '') {
          this.listoflanguage = response
        }
      })
  }


  // =========================== author ============================

  onauthorModal(content) {
    this.selectauthorModalreferences = this.modalService.open(content, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
    this.aap_name = '';
    this.aap_name_english = '';
    this.aap_address = '';
    this.aap_contact = '';
    this.aap_profile = '';
    this.base64code = '';
    this.aap_town = '';
    this.myimage = of(<any>[])
  }
  onCloseselectauthortModal() {
    this.selectauthorModalreferences.close();
    this.aap_name = '';
    this.aap_name_english = '';
    this.aap_address = '';
    this.aap_contact = '';
    this.aap_profile = '';
    this.base64code = '';
    this.aap_town = '';
    this.myimage = of(<any>[]);
    this.newimageaapboo = false;

  }
  onsubmitauthor() {
    this.spinner.show()
    if (this.aap_name == "") {
      
      this.adminerror = "Enter the author name in Tamil"
      this.spinner.hide()
    }
    else if (this.aap_name_english == "") {
      this.adminerror = "Enter the author name in English"
      this.spinner.hide()
    }
    else if (this.aap_address == "") {
      this.adminerror = "Enter the author Address"
      this.spinner.hide()
    }
    else if (this.aap_contact == "") {
      this.adminerror = "Enter the author Contact"
      this.spinner.hide()
    }
    else if (this.aap_profile == "") {
      this.adminerror = "Enter the author Profile"
      this.spinner.hide()
    }
    else if (this.aap_town == "") {
      this.adminerror = "Enter the author Town"
      this.spinner.hide()
    }
    else if (this.newimageaapboo == true && this.base64code == "") {
      this.adminerror = "select the image"
      this.spinner.hide()
    }
    else if (this.newimageaapboo == true) {
      this.adminerror = ''
      var authorputdata = {
        "aap_name": this.aap_name,
        "aap_name_english": this.aap_name_english,
        "aap_address": this.aap_address,
        "aap_town": this.aap_town,
        "aap_contact": this.aap_contact,
        "aap_profile": this.aap_profile,
        "aap_type": "author",
        "created_by": String(this.userDetails.aap_ids),
        "aap_photo": this.base64code
      }
      this.adminService.aappost(authorputdata).subscribe(
        response => {
          if (response) {
            console.log(response)
            this.onCloseselectauthortModal()
            this.getauthordata();
            this.spinner.hide()
            this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
          }
          else {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAD', { cssClass: 'alert-danger', timeout: 3000 });
          }
        }, err => {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BPAD', { cssClass: 'alert-danger', timeout: 3000 });
        })
    }
    else {
      this.adminerror = ''
      this.base64code = "null"
      var authorputdata = {
        "aap_name": this.aap_name,
        "aap_name_english": this.aap_name_english,
        "aap_address": this.aap_address,
        "aap_town": this.aap_town,
        "aap_contact": this.aap_contact,
        "aap_profile": this.aap_profile,
        "aap_type": "author",
        "created_by": String(this.userDetails.aap_ids),
        "aap_photo": this.base64code
      }
      
    this.adminService.aappost(authorputdata).subscribe(
      response => {
        if (response) {
          console.log(response)
          this.onCloseselectauthortModal()
          this.getauthordata();
          this.spinner.hide()
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BPAD', { cssClass: 'alert-danger', timeout: 3000 });
      })
    }


  }
  getauthordata() {
    this.adminService.getauthor().subscribe(
      response => {
        if (response != '') {
          this.spinner.show();
          this.listofauthor = response
          this.spinner.hide();
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GAD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BGAD', { cssClass: 'alert-danger', timeout: 3000 });
      })
  }
  printauthor(a) {
    console.log(a)
    this.author_code = a
    console.log(this.author_code)
  }


  // ============================== artist ===================
  onartistModal(content) {
    this.selectartistModalreferences = this.modalService.open(content, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
  }
  onCloseselectartisttModal() {
    this.selectartistModalreferences.close();
    this.aap_name = '';
    this.aap_name_english = '';
    this.aap_address = '';
    this.aap_contact = '';
    this.aap_profile = '';
    this.base64code = '';
    this.aap_town = '';
    this.myimage = of(<any>[]);
    this.newimageaapboo = false;
  }
  onsubmitartist() {
    this.spinner.show();
    if (this.aap_name == "") {
      this.adminerror = "Enter the artist name in Tamil";
      this.spinner.hide();
    }
    else if (this.aap_name_english == "") {
      this.adminerror = "Enter the artist name in English";
      this.spinner.hide();
    }
    else if (this.aap_address == "") {
      this.adminerror = "Enter the artist Address";
      this.spinner.hide();
    }
    else if (this.aap_town == "") {
      this.adminerror = "Enter the artist Town";
      this.spinner.hide();
    }
    else if (this.aap_contact == "") {
      this.adminerror = "Enter the artist Contact";
      this.spinner.hide();
    }
    else if (this.aap_profile == "") {
      this.adminerror = "Enter the artist Profile";
      this.spinner.hide();
    }
    else if (this.newimageaapboo == true && this.base64code == "") {
      this.adminerror = "select the image";
      this.spinner.hide();
    }
    else if (this.newimageaapboo == true) {
      this.adminerror = ''
      var authorputdata = {
        "aap_name": this.aap_name,
        "aap_name_english": this.aap_name_english,
        "aap_address": this.aap_address,
        "aap_town": this.aap_town,
        "aap_contact": this.aap_contact,
        "aap_profile": this.aap_profile,
        "aap_type": "artist",
        "created_by": String(this.userDetails.aap_ids),
        "aap_photo": this.base64code
      }
          this.adminService.aappost(authorputdata).subscribe(
      response => {
        if (response) {
          console.log(response)
          this.onCloseselectartisttModal()
          this.getartistdata();
          this.spinner.hide()
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAAD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BPAAD', { cssClass: 'alert-danger', timeout: 3000 });
      })
    }
    else {
      this.adminerror = ''
      this.base64code = "null"
      var authorputdata = {
        "aap_name": this.aap_name,
        "aap_name_english": this.aap_name_english,
        "aap_address": this.aap_address,
        "aap_town": this.aap_town,
        "aap_contact": this.aap_contact,
        "aap_profile": this.aap_profile,
        "aap_type": "artist",
        "created_by": String(this.userDetails.aap_ids),
        "aap_photo": this.base64code
      }
      this.adminService.aappost(authorputdata).subscribe(
        response => {
          if (response) {
            console.log(response)
            this.onCloseselectartisttModal()
            this.getartistdata();
            this.spinner.hide()
            this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
          }
          else {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAAD', { cssClass: 'alert-danger', timeout: 3000 });
          }
        }, err => {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BPAAD', { cssClass: 'alert-danger', timeout: 3000 });
        })
    }

    // this.adminService.aappost(authorputdata).subscribe(
    //   response => {
    //     if (response) {
    //       console.log(response)
    //       this.onCloseselectartisttModal()
    //       this.getartistdata();
    //       this.spinner.hide()
    //       this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
    //     }
    //     else {
    //       this.spinner.hide();
    //       this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAAD', { cssClass: 'alert-danger', timeout: 3000 });
    //     }
    //   }, err => {
    //     this.spinner.hide();
    //     this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BPAAD', { cssClass: 'alert-danger', timeout: 3000 });
    //   })

  }
  getartistdata() {
    this.adminerror=''
    this.adminService.getartist().subscribe(
      response => {
        if (response != '') {
          this.listofartist = response
          this.spinner.hide(); this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PSA', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BPSA', { cssClass: 'alert-danger', timeout: 3000 });
      })
  }
  printartist(a) {
    console.log(a)
    this.artist_code = a
    console.log(this.artist_code)
  }

  // =========================publisher =====================
  onpublisherModal(content) {
    this.selectpublisherModalreferences = this.modalService.open(content, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
  }
  onCloseselectpublishertModal() {
    this.selectpublisherModalreferences.close();
    this.aap_name = '';
    this.aap_name_english = '';
    this.aap_address = '';
    this.aap_contact = '';
    this.aap_profile = '';
    this.base64code = '';
    this.aap_town = '';
    this.myimage = of(<any>[]);
    this.newimageaapboo = false
  }
  onsubmitpublisher() {
    this.spinner.show()
    if (this.aap_name == "") {
      this.adminerror = "Enter the publisher name in Tamil";
      this.spinner.hide();
    }
    else if (this.aap_name_english == "") {
      this.adminerror = "Enter the publisher name in English";
      this.spinner.hide();
    }
    else if (this.aap_address == "") {
      this.adminerror = "Enter the publisher Address";
      this.spinner.hide();
    }
    else if (this.aap_town == "") {
      this.adminerror = "Enter the publisher Town";
      this.spinner.hide();
    }
    else if (this.aap_contact == "") {
      this.adminerror = "Enter the publisher Contact";
      this.spinner.hide();
    }
    else if (this.aap_profile == "") {
      this.adminerror = "Enter the publisher Profile";
      this.spinner.hide();
    }
    else if (this.newimageaapboo == true && this.base64code == "") {
      this.adminerror = "select the image";
      this.spinner.hide();
    }
    else if (this.newimageaapboo == true) {
      this.adminerror = ''
      var authorputdata = {
        "aap_name": this.aap_name,
        "aap_name_english": this.aap_name_english,
        "aap_address": this.aap_address,
        "aap_town": this.aap_town,
        "aap_contact": this.aap_contact,
        "aap_profile": this.aap_profile,
        "aap_type": "publisher",
        "created_by": String(this.userDetails.aap_ids),
        "aap_photo": this.base64code
      }
    }
    else {
      this.adminerror = ''
      this.base64code = "null"
      var authorputdata = {
        "aap_name": this.aap_name,
        "aap_name_english": this.aap_name_english,
        "aap_address": this.aap_address,
        "aap_town": this.aap_town,
        "aap_contact": this.aap_contact,
        "aap_profile": this.aap_profile,
        "aap_type": "publisher",
        "created_by": String(this.userDetails.aap_ids),
        "aap_photo": this.base64code
      }
    }

    this.adminService.aappost(authorputdata).subscribe(
      response => {
        if (response) {
          console.log(response)
          this.onCloseselectpublishertModal()
          this.getpublisherdata();
          this.spinner.hide()
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BPAD', { cssClass: 'alert-danger', timeout: 3000 });
      })

  }
  getpublisherdata() {
    this.adminService.getpublisher().subscribe(
      response => {
        if (response != '') {
          this.listofpublisher = response
          this.spinner.hide(); this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GPD', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BGPD', { cssClass: 'alert-danger', timeout: 3000 });
      })
  }
  prinpublisher(a) {
    console.log(a)
    this.publisher_code = a
    console.log(this.publisher_code)
  }
  // =============================AAP===============================
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
  convertToBase642(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile2(file, subscriber);
    });
    observable.subscribe((d) => {
      console.log(d)
      this.myimage2 = d
      this.base64code2 = d
    })
  }
  readFile2(file: File, subscriber: Subscriber<any>) {
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
  publishersearch(a) {
    this.spinner.show()
    if (a == '') {
      this.adminerror = "Enter the Search Word"
      this.spinner.hide()
    }
    else if (this.searchdata == '') {
      this.adminerror = "Select the Type of Search"
      this.spinner.hide()
    }
    else {

      var data = {
        "search": a,
        "type": this.searchdata
      }
        this.adminerror=''
        this.adminService.getsearch(data).subscribe(
          response => {
            if (response) {
              this.row = response;
              const sale: bookdatas[] = this.row;
              this.dataSourceOne = new MatTableDataSource(sale);
              this.dataSourceOne.paginator = this.tableOnePaginator;
              this.dataSourceOne.sort = this.tableOneSort;
              this.spinner.hide(); this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
              this.spinner.hide();
              this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GST', { cssClass: 'alert-danger', timeout: 3000 });
            }
          }, err => {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும்.Code:BGST', { cssClass: 'alert-danger', timeout: 3000 });
          })
      }
  }
  // ==============================editlanguage==================
  openlanguageedit(a, b) {
    this.editlaguageModalreferences = this.modalService.open(a, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
    this.datavalue = b;
    console.log(this.datavalue)
  }
  closelanguageedit() {
    this.editlaguageModalreferences.close();
  }
  // =========================editcategory========================
  opencategoryedit(a, b) {
    this.editcategoryModalreferences = this.modalService.open(a, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
    this.datavalue = b;
  }
  closecategoryedit() {
    this.editcategoryModalreferences.close();

  }
  // =====================editsubject=================
  opensubjectedit(a, b) {
    this.editsubjectModalreferences = this.modalService.open(a, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
    this.datavalue = b;

  }
  closesubjectedit() {
    this.editsubjectModalreferences.close();
    this.datavalue = '';
  }
  openauthoredit(a, b) {
    this.spinner.show()
    this.editauthorModalreferences = this.modalService.open(a, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
    this.adminerror=''
    this.adminService.aapget(b.aap_ids).subscribe(
      response => {
        if (response) {
          this.datavalue = response;
          if (this.datavalue.aap_photo == 'null') {
            this.imagedataboo = false
            this.imagedata = 'null'
          }
          else {
            this.imagedataboo = true
            this.imagedata = this.datavalue.aap_photo
          }
          this.spinner.hide();
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GAE', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:BGAE', { cssClass: 'alert-danger', timeout: 3000 });
      })

  }
  closeauthoredit() {
    this.editauthorModalreferences.close();
    this.datavalue = '';
    this.base64code = '';
    this.myimage = of(<any>[])
    this.newimagedataboo = false;
    this.newaapdatanewuser = false;
    this.newimagedataboo = false;
    this.newpassword = ''
    this.imagedata = ''
  }
  openartistedit(a, b) {
    this.spinner.show()
    this.editartistModalreferences = this.modalService.open(a, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
    this.adminerror=''
    this.adminService.aapget(b.aap_ids).subscribe(
      response => {
        if (response) {
          this.datavalue = response;
          if (this.datavalue.aap_photo == 'null') {
            this.imagedataboo = false
            this.imagedata = 'null'
          }
          else {
            this.imagedataboo = true
            this.imagedata = this.datavalue.aap_photo
          }
          this.spinner.hide();
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GEA', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். code:BGEA', { cssClass: 'alert-danger', timeout: 3000 });
      })

  }
  closeartistedit() {
    this.editartistModalreferences.close();
    this.datavalue = '';
    this.base64code = '';
    this.myimage = of(<any>[])
    this.newimagedataboo = false;
    this.newaapdatanewuser = false;
    this.newimagedataboo = false;
    this.newpassword = '';
    this.imagedata = ''
  }
  openpublisheredit(a, b) {
    this.spinner.show()
    this.editpublisherModalreferences = this.modalService.open(a, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'lg',
    })
    this.adminerror=''
    this.adminService.aapget(b.aap_ids).subscribe(
      response => {
        if (response) {
          this.datavalue = response;
          if (this.datavalue.aap_photo == 'null') {
            this.imagedataboo = false
            this.imagedata = 'null'
          }
          else {
            this.imagedataboo = true
            this.imagedata = this.datavalue.aap_photo
          }
          this.spinner.hide();
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GPE', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:BGPE', { cssClass: 'alert-danger', timeout: 3000 });
      }
    )

  }
  closepublisheredit() {
    this.editpublisherModalreferences.close();
    this.datavalue = '';
    this.base64code = '';
    this.myimage = of(<any>[])
    this.newimagedataboo = false;
    this.pdfdataboo = false;
    this.newimagedataboo = false;
    this.newaapdatanewuser = false;
    this.newimagedataboo = false;
    this.newpassword = '';
    this.imagedata = '';
    this.adminerror='';
  }
  closeaap_dataedit() {
    if (this.datavalue.aap_type = 'author') {
      this.editauthorModalreferences.close();
    }
    else if (this.datavalue.aap_type = 'artist') {
      this.editartistModalreferences.close();
    }
    else if (this.datavalue.aap_type = 'publisher') {
      this.editpublisherModalreferences.close();
    }
    this.datavalue = '';
    this.base64code = '';
    this.myimage = of(<any>[])
    this.newimagedataboo = false;
    this.imagedata = '';
    this.imagedataboo = false;
    this.adminerror=''

  }
  putaapdata() {
    this.spinner.show();
    if (this.datavalue.aap_name == '') {
      this.spinner.hide();
      this.adminerror = "Enter the Name in Tamil"
    }
    else if (this.datavalue.aap_name_english == '') {
      this.spinner.hide();
      this.adminerror = "Enter the Name in English"
    }
    else if (this.datavalue.aap_address == '') {
      this.spinner.hide();
      this.adminerror = "Enter the Address"
    }
    else if (this.datavalue.aap_contact == '') {
      this.spinner.hide();
      this.adminerror = "Enter the Contact"
    }
    else if (this.datavalue.aap_profile == '') {
      this.spinner.hide();
      this.adminerror = "Enter the Profile"
    }
    else if (this.datavalue.aap_town == '') {
      this.spinner.hide();
      this.adminerror = "Enter the Town"
    }
    else if (this.newimagedataboo == true && this.base64code == '') {
      this.spinner.hide();
      this.adminerror = "Select the Image"
    }
    else if (this.newaapdatanewuser == true && this.datavalue.aap_username == ''|| this.newaapdatanewuser == true && this.datavalue.aap_username == 'null'||this.newaapdatanewuser == true && this.datavalue.aap_username == null) {
      this.spinner.hide();
      this.adminerror = "Enter the Username"
    }
    else if (this.newaapdatanewuser == true && this.newpassword == "") {
      this.spinner.hide();
      this.adminerror = "Enter the password"
    }

    else {
      if (this.newimagedataboo == true && this.newaapdatanewuser == false) {
        this.adminerror=''
        var aap_datas1 = {
          'id': this.datavalue.aap_ids,
          'aap_name': this.datavalue.aap_name,
          'aap_name_english': this.datavalue.aap_name_english,
          'aap_address': this.datavalue.aap_address,
          'aap_contact': this.datavalue.aap_contact,
          'aap_profile': this.datavalue.aap_profile,
          'aap_town': this.datavalue.aap_town,
          'aap_photo': this.base64code,
          'created_by': String(this.userDetails.aap_ids),
        }
        console.log(aap_datas1)
        console.log("1&0")
        this.adminService.aapputphoto(aap_datas1).subscribe(
          response => {
            if (response.message == 'Updated') {
              console.log(response)
              this.spinner.hide();
              // this.myimage=''
              if (this.datavalue.aap_type == "author") {
                this.openViewAuthor()
                this.closeauthoredit()
                this.getauthordata();

              }
              else if (this.datavalue.aap_type == "artist") {
                this.openViewartist()
                this.closeartistedit()
                this.getartistdata();

              }
              else if (this.datavalue.aap_type == "publisher") {
                this.openViewPublisher()
                this.closepublisheredit()
                this.getpublisherdata();
              }
              this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
              this.spinner.hide();
              this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAAP1', { cssClass: 'alert-danger', timeout: 3000 });
            }
          }, err => {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:PAAP1', { cssClass: 'alert-danger', timeout: 3000 });
          })

      }
      else if (this.newaapdatanewuser == true && this.newimagedataboo == false) {
        this.adminerror=''
        var aap_datas3 = {
          'id': this.datavalue.aap_ids,
          'aap_name': this.datavalue.aap_name,
          'aap_name_english': this.datavalue.aap_name_english,
          'aap_address': this.datavalue.aap_address,
          'aap_contact': this.datavalue.aap_contact,
          'aap_profile': this.datavalue.aap_profile,
          'aap_town': this.datavalue.aap_town,
          'created_by': String(this.userDetails.aap_ids),
          'username': String(this.datavalue.aap_username),
          'password': this.newpassword
        }
        console.log(aap_datas3)
        console.log("0&1")
        this.adminService.checkerusername(aap_datas3).subscribe(
          response => {
            console.log(response.username, this.datavalue.aap_username)
            if(response.username=="no"||response.username==this.datavalue.aap_name){

        this.adminService.aapputusername(aap_datas3).subscribe(
          response => {
            if (response.message == 'Updated') {
              console.log(response)
              this.spinner.hide();
              if (this.datavalue.aap_type == "author") {
                this.openViewAuthor()
                this.closeauthoredit()
                this.getauthordata();

              }
              else if (this.datavalue.aap_type == "artist") {
                this.openViewartist()
                this.closeartistedit()
                this.getartistdata();

              }
              else if (this.datavalue.aap_type == "publisher") {
                this.openViewPublisher()
                this.closepublisheredit()
                this.getpublisherdata();
              }
              this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
              this.spinner.hide();
              this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAAP2', { cssClass: 'alert-danger', timeout: 3000 });
            }
          }, err => {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:PAAP2', { cssClass: 'alert-danger', timeout: 3000 });
          })
          this.spinner.hide();
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.adminerror="username already taken"
          this.spinner.hide();
          this._flashMessagesService.show("username already taken", { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:PAAP2', { cssClass: 'alert-danger', timeout: 3000 });
      })    
      }
      else if (this.newaapdatanewuser == true && this.newimagedataboo == true) {
        this.adminerror=''
        var aap_datas = {
          'id': this.datavalue.aap_ids,
          'aap_name': this.datavalue.aap_name,
          'aap_name_english': this.datavalue.aap_name_english,
          'aap_address': this.datavalue.aap_address,
          'aap_contact': this.datavalue.aap_contact,
          'aap_profile': this.datavalue.aap_profile,
          'aap_town': this.datavalue.aap_town,
          'aap_photo': this.base64code,
          'created_by': String(this.userDetails.aap_ids),
          'username': String(this.datavalue.aap_username),
          'password': this.newpassword
        }
        console.log(aap_datas)
        console.log("1&1")
        this.adminService.checkerusername(aap_datas).subscribe(
          response => {
            if(response.username=="no"||response.username==this.datavalue.aap_name){
        this.adminService.aapputphotousername(aap_datas).subscribe(
          response => {
            if (response.message == 'Updated') {
              console.log(response)
              this.spinner.hide();
              if (this.datavalue.aap_type == "author") {
                this.openViewAuthor()
                this.closeauthoredit()
                this.getauthordata();

              }
              else if (this.datavalue.aap_type == "artist") {
                this.openViewartist()
                this.closeartistedit()
                this.getartistdata();

              }
              else if (this.datavalue.aap_type == "publisher") {
                this.openViewPublisher()
                this.closepublisheredit()
                this.getpublisherdata();
              }
              this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
              this.spinner.hide();
              this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAAP3', { cssClass: 'alert-danger', timeout: 3000 });
            }
          }, err => {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:PAAP3', { cssClass: 'alert-danger', timeout: 3000 });
          })
          this.spinner.hide();
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.adminerror="username already taken"
          this.spinner.hide();
          this._flashMessagesService.show("username already taken", { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:PAAP2', { cssClass: 'alert-danger', timeout: 3000 });
      })    

      }
      else if (this.newaapdatanewuser == false && this.newimagedataboo == false){
        this.adminerror=''
        var aap_datas2 = {
          'id': this.datavalue.aap_ids,
          'aap_name': this.datavalue.aap_name,
          'aap_name_english': this.datavalue.aap_name_english,
          'aap_address': this.datavalue.aap_address,
          'aap_contact': this.datavalue.aap_contact,
          'aap_profile': this.datavalue.aap_profile,
          'aap_town': this.datavalue.aap_town,
          'created_by': String(this.userDetails.aap_ids),
        }
        console.log(aap_datas2)
        console.log("0&0")
        this.adminService.aapput(aap_datas2).subscribe(
          response => {
            if (response.message == 'Updated') {
              console.log(response)
              this.spinner.hide();
              if (this.datavalue.aap_type == "author") {
                this.openViewAuthor()
                this.closeauthoredit()
                this.getauthordata();

              }
              else if (this.datavalue.aap_type == "artist") {
                this.openViewartist()
                this.closeartistedit()
                this.getartistdata();

              }
              else if (this.datavalue.aap_type == "publisher") {
                this.openViewPublisher()
                this.closepublisheredit()
                this.getpublisherdata();
              }
              this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
            }
            else {
              this.spinner.hide();
              this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PAAP4', { cssClass: 'alert-danger', timeout: 3000 });
            }
          }, err => {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:PAAP4', { cssClass: 'alert-danger', timeout: 3000 });
          })
      }

    }

  }
  openbookedit(a, b) {
    this.spinner.show()
    this.editpublisherModalreferences = this.modalService.open(a, {
      backdrop: 'static',
      centered: true,
      keyboard: false,
      size: 'xl',
    })
    this.adminerror=''
    this.adminService.bookget(b.id).subscribe(
      response => {
        if (response) {

          this.datavalue = response;
          this.datavalue.visibility = (this.datavalue.visibility == "true");
          this.spinner.hide()
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:GOEB', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:BGOEB', { cssClass: 'alert-danger', timeout: 3000 });
      }
    )
    
  }
  editbooksave() {
    // console.log("hi")

    var departmentList = this.listoflanguage.filter(
      listoflanguage => listoflanguage.language_name == this.datavalue.language_code
    )
    var categorysList = this.listofcategory.filter(
      listofcategory => listofcategory.category_name == this.datavalue.category
    )
    var subjectsList = this.listofsubject.filter(
      listofsubject => listofsubject.subject_name == this.datavalue.subject_code
    )
    var authorsList = this.listofauthor.filter(
      listofauthor => listofauthor.aap_name == this.datavalue.author_code
    )
    var artistsList = this.listofartist.filter(
      listofartist => listofartist.aap_name == this.datavalue.artist_code
    )
    var publishersList = this.listofpublisher.filter(
      listofpublisher => listofpublisher.aap_name == this.datavalue.publisher_code
    )
    //  console.log(departmentList[0].language_id)
    if (this.newimagedataboo == true && this.pdfdataboo == true) {
      this.adminerror=''
      var editedbookdetail = {
        "id": this.datavalue.id,
        "id_number": "null",
        "isbn": this.datavalue.isbn,
        'ccno': this.datavalue.ccno,
        "subject_code": subjectsList[0].subject_id,
        "sub_title_code": this.datavalue.sub_title_code,
        "title_code": this.datavalue.title_code,
        "author_code": authorsList[0].aap_ids,
        "language_code": departmentList[0].language_id,
        "edition": this.datavalue.edition,
        "reprint": this.datavalue.reprint,
        "year": this.datavalue.year,
        "copy_rights": this.datavalue.copy_rights,
        "size": this.datavalue.size,
        "pages": this.datavalue.pages,
        "artist_code": artistsList[0].aap_ids,
        "publisher_code": publishersList[0].aap_ids,
        "binding": this.datavalue.binding,
        "price": this.datavalue.price,
        "weight": this.datavalue.weight,
        "annexures": this.datavalue.annexures,
        "prizes": this.datavalue.prizes,
        "miscellaneous": this.datavalue.miscellaneous,
        "prepared_cheched_by": this.prepared_cheched_by,
        "cover_image": this.base64code,
        "Summary_of_the_book": this.datavalue.Summary_of_the_book,
        "book_pdf": this.book_pdf,
        "created_by": String(this.userDetails.aap_ids),

        "category": categorysList[0].category_id,
        "visibility": this.datavalue.visibility,
      }
    }
    else if (this.newimagedataboo == false && this.pdfdataboo == true) {
      this.adminerror=''
      var editedbookdetail = {
        "id": this.datavalue.id,
        "id_number": "null",
        "isbn": this.datavalue.isbn,
        'ccno': this.datavalue.ccno,
        "subject_code": subjectsList[0].subject_id,
        "sub_title_code": this.datavalue.sub_title_code,
        "title_code": this.datavalue.title_code,
        "author_code": authorsList[0].aap_ids,
        "language_code": departmentList[0].language_id,
        "edition": this.datavalue.edition,
        "reprint": this.datavalue.reprint,
        "year": this.datavalue.year,
        "copy_rights": this.datavalue.copy_rights,
        "size": this.datavalue.size,
        "pages": this.datavalue.pages,
        "artist_code": artistsList[0].aap_ids,
        "publisher_code": publishersList[0].aap_ids,
        "binding": this.datavalue.binding,
        "price": this.datavalue.price,
        "weight": this.datavalue.weight,
        "annexures": this.datavalue.annexures,
        "prizes": this.datavalue.prizes,
        "miscellaneous": this.datavalue.miscellaneous,
        "prepared_cheched_by": this.prepared_cheched_by,
        "cover_image": this.datavalue.cover_image,
        "Summary_of_the_book": this.datavalue.Summary_of_the_book,
        "book_pdf": this.book_pdf,
        "created_by": String(this.userDetails.aap_ids),

        "category": categorysList[0].category_id,
        "visibility": this.datavalue.visibility,
      }
    }
    else if (this.newimagedataboo == true && this.pdfdataboo == false) {
      this.adminerror=''
      var editedbookdetail = {
        "id": this.datavalue.id,
        "id_number": "null",
        "isbn": this.datavalue.isbn,
        'ccno': this.datavalue.ccno,
        "subject_code": subjectsList[0].subject_id,
        "sub_title_code": this.datavalue.sub_title_code,
        "title_code": this.datavalue.title_code,
        "author_code": authorsList[0].aap_ids,
        "language_code": departmentList[0].language_id,
        "edition": this.datavalue.edition,
        "reprint": this.datavalue.reprint,
        "year": this.datavalue.year,
        "copy_rights": this.datavalue.copy_rights,
        "size": this.datavalue.size,
        "pages": this.datavalue.pages,
        "artist_code": artistsList[0].aap_ids,
        "publisher_code": publishersList[0].aap_ids,
        "binding": this.datavalue.binding,
        "price": this.datavalue.price,
        "weight": this.datavalue.weight,
        "annexures": this.datavalue.annexures,
        "prizes": this.datavalue.prizes,
        "miscellaneous": this.datavalue.miscellaneous,
        "prepared_cheched_by": this.prepared_cheched_by,
        "cover_image": this.base64code,
        "Summary_of_the_book": this.datavalue.Summary_of_the_book,
        "book_pdf": this.datavalue.book_pdf,
        "created_by": String(this.userDetails.aap_ids),

        "category": categorysList[0].category_id,
        "visibility": this.datavalue.visibility,
      }
    }
    else {
      this.adminerror=''
      var editedbookdetail = {
        "id": this.datavalue.id,
        "id_number": "null",
        "isbn": this.datavalue.isbn,
        'ccno': this.datavalue.ccno,
        "subject_code": subjectsList[0].subject_id,
        "sub_title_code": this.datavalue.sub_title_code,
        "title_code": this.datavalue.title_code,
        "author_code": authorsList[0].aap_ids,
        "language_code": departmentList[0].language_id,
        "edition": this.datavalue.edition,
        "reprint": this.datavalue.reprint,
        "year": this.datavalue.year,
        "copy_rights": this.datavalue.copy_rights,
        "size": this.datavalue.size,
        "pages": this.datavalue.pages,
        "artist_code": artistsList[0].aap_ids,
        "publisher_code": publishersList[0].aap_ids,
        "binding": this.datavalue.binding,
        "price": this.datavalue.price,
        "weight": this.datavalue.weight,
        "annexures": this.datavalue.annexures,
        "prizes": this.datavalue.prizes,
        "miscellaneous": this.datavalue.miscellaneous,
        "prepared_cheched_by": this.prepared_cheched_by,
        "cover_image": this.datavalue.cover_image,
        "Summary_of_the_book": this.datavalue.Summary_of_the_book,
        "book_pdf": this.datavalue.book_pdf,
        "created_by": String(this.userDetails.aap_ids),

        "category": categorysList[0].category_id,
        "visibility": this.datavalue.visibility,
      }
    }
    console.log(editedbookdetail)
    this.adminService.editbookput(editedbookdetail).subscribe(
      response => {
        if (response.message == 'Updated') {
          this.closepublisheredit()
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:EB', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:BEB', { cssClass: 'alert-danger', timeout: 3000 });
      })
  }
  onClick() {
    // console.log('23333');
    if (this.datavalue.book_pdf == 'null') {
      console.log("hi1")
    }
    else if (this.datavalue.book_pdf == null) {
      console.log(this.datavalue.book_pdf)
      console.log("hi2")
    }
    else {
      console.log(this.datavalue.book_pdf.length)
      console.log("hi3")
      this.showPdf();
    }
  }
  showPdf() {

    const downloadLink = document.createElement('a');
    const fileName = this.datavalue.title_code + '.pdf';

    downloadLink.href = this.datavalue.book_pdf;
    downloadLink.download = fileName;
    downloadLink.click();
  }
  // =====================put subject==============
  putsubjectdata() {
    this.spinner.show();
    if (this.datavalue.subject_name == '') {
      this.adminerror = "Enter the Name in Tamil"
    }
    else if (this.datavalue.subject_name_english == '') {
      this.adminerror = "Enter the Name in English"
    }
    else if (this.datavalue.branch == '') {
      this.adminerror = "Enter the Branch"
    }
    else {
      this.adminerror = ""
      var aap_datas = {
        'id': this.datavalue.subject_id,
        'subject_name': this.datavalue.subject_name,
        'subject_name_english': this.datavalue.subject_name_english,
        'branch': this.datavalue.branch,
        'created_by': String(this.userDetails.aap_ids)
      }
    }


    console.log(aap_datas)
    this.adminService.subjectput(aap_datas).subscribe(
      response => {
        if (response.message == 'Updated') {
          console.log(response)
          this.closesubjectedit()
          this.getsubjectdata()
          this.spinner.hide();

          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PS', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:BPS', { cssClass: 'alert-danger', timeout: 3000 });
      })
  }
  // ====================== put catagory ===========
  putcatgorydata() {
    this.spinner.show();
    if (this.datavalue.category_name == '') {
      this.adminerror = "Enter the Name in Tamil"
    }
    else if (this.datavalue.category_name_english == '') {
      this.adminerror = "Enter the Name in English"
    }
    else {
      this.adminerror = ""
      var aap_datas = {
        'id': this.datavalue.category_id,
        'category_name': this.datavalue.category_name,
        'category_name_english': this.datavalue.category_name_english,
        'created_by': String(this.userDetails.aap_ids)
      }
      this.adminService.categoryput(aap_datas).subscribe(
        response => {
          if (response.message == 'Updated') {
            console.log(response)
            this.closecategoryedit()
            this.getcategorydata();
            this.spinner.hide();
            this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
          }
          else {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PC', { cssClass: 'alert-danger', timeout: 3000 });
          }
        }, err => {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:BPC', { cssClass: 'alert-danger', timeout: 3000 });
        })
    }
  }
  //=======================put language=============
  putlanguagedata() {
    this.spinner.show();
    if (this.datavalue.language_name == '') {
      this.adminerror = "Enter the Name in Tamil"
    }
    else if (this.datavalue.language_name_english == '') {
      this.adminerror = "Enter the Name in English"
    }
    else {
      this.adminerror = ""
      var language_datas = {
        'id': this.datavalue.language_id,
        'language_name': this.datavalue.language_name,
        'language_name_english': this.datavalue.language_name_english,
        'created_by': String(this.userDetails.aap_ids)
      }
      this.adminService.languageput(language_datas).subscribe(
        response => {
          if (response.message == 'Updated') {
            console.log(response)
            this.closelanguageedit();
            this.getlanguagedata();
            this.spinner.hide();
            this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
          }
          else {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PL', { cssClass: 'alert-danger', timeout: 3000 });
          }
        }, err => {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:BPL', { cssClass: 'alert-danger', timeout: 3000 });
        })
    }
  }
  openViewuserlist() {
    this.spinner.show()
    this.page = "userslist";

    this.adminerror=''
    this.adminService.getallaap().subscribe(
      response => {
        if (response) {
          this.row = response;
          console.log(this.row)
          const safe: aapdatastotable[] = this.row;
          this.dataSourceSix = new MatTableDataSource(safe);
          this.dataSourceSix.paginator = this.tableSixPaginator;
          this.dataSourceSix.sort = this.tableSixSort;
          this.spinner.hide();
          this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
        }
        else {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:VUL', { cssClass: 'alert-danger', timeout: 3000 });
        }
      }, err => {
        this.spinner.hide();
        this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code:BVUL', { cssClass: 'alert-danger', timeout: 3000 });
      })
  }
  enableuser(a) {
    var datasent = {
      'id': a,
      'created_by': this.userDetails.aap_ids
    }
    this.adminService.statusupdate(datasent).subscribe(
      response => {
        if (response.message == 'updated') {
          this.openViewuserlist()
        }
      })
  }
  disableuser(a) {
    var datasent = {
      'id': a,
      'created_by': this.userDetails.aap_ids
    }
    this.adminService.statusupdatedis(datasent).subscribe(
      response => {
        if (response.message == 'updated') {
          this.openViewuserlist()
        }
      })
  }
  openViewprofile() {
    this.spinner.show()
    this.page = "profile";
    this.spinner.hide();
  }
  reset() {
    this.newimagedataboo=false;
    this.newpdfdataboo=false;
    this.book_pdf='';
    this.base64code='';
    this.publisher_code = '',
      this.artist_code = '',
      this.author_code = '',
      this.subject_code = '',
      this.category_code = '',
      this.language_code = '',
      this.isbn = '',
      this.ccno = '',
      this.title = '',
      this.sub_title = '',
      this.size = '',
      this.pages = '',
      this.edition = '',
      this.reprint = '',
      this.year = '',
      this.copy_rights = '',
      this.binding = '',
      this.price = '',
      this.weight = '',
      this.annexures = '',
      this.prizes = '',
      this.miscellaneous = '',
      this.Summary_of_the_book = '',
      this.visibility = false,
      this.myimage = of(<any>[])
    this.InputVar.nativeElement.value = "";
    this.InputVar2.nativeElement.value = "";
    this.visibility = false;
    this.pdfdataboo = false;
    this.status = false;
    this.newpdfdataboo = false;
    this.adminerror=''
  }
  exportdata(a) {
    if (a == '') {
      this.adminerror = "Enter the Search Word"
    }
    else if (this.searchdata == '') {
      this.adminerror = "Select the Type of Search"
    }
    else {

      var data = {
        "search": a,
        "type": this.searchdata
      }

      this.adminService.exportdatainfo(data).subscribe(
        response => {
          if (response.message == "exported") {
            this.adminerror = ''
            this._flashMessagesService.show('வெற்றிகரமாக ஏற்றுமதி செய்யப்பட்டது', { cssClass: 'alert-success', timeout: 3000 });
            // console.log("hi")
            window.open("https://docs.google.com/spreadsheets/d/11ueTdQqAp_Xi-oCd2qvOcRbf7dYlaLf3oufBNzhxIUQ/edit#gid=1245643065", "blank")
          }
          else {
            this.spinner.hide();
            this._flashMessagesService.show('புதுப்பிக்க முடியவில்லை Code:PEE', { cssClass: 'alert-danger', timeout: 3000 });
          }
        }, err => {
          this.spinner.hide();
          this._flashMessagesService.show('புதுப்பிப்பதில் பிழை. நிர்வாகியைத் தொடர்பு கொள்ளவும். Code: BPEE', { cssClass: 'alert-danger', timeout: 3000 });
        }

      )
    }
  }
}
export interface bookdatas {
  "title_code": String,
  "author_code": String,
  "publisher_code": String,
  "year": String,
}
export interface aapdatas {
  'aap_name': String,
  'aap_name_english': String,
  'aap_town': String,
  'aap_contact': String,
}
export interface aapdatastotable {
  'aap_name': String,
  'aap_name_english': String,
  'aap_type': String,
  'aap_contact': String,
  "activation_status": String
}
export interface categorydatas { 'category_name': String, 'category_name_english': String }

export interface languagedatas { 'language_name': String, 'language_name_english': String }

export interface subjectdatas { 'subject_name': String, 'subject_name_english': String, 'branch': String }