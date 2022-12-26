import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { StaffsignupComponent } from './staffsignup/staffsignup.component';
import { AuthGuard } from './services/auth.guard';
import {MatSelectModule} from '@angular/material/select';
import { AdminComponent } from './admin/admin.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { NgxSpinnerModule } from "ngx-spinner";
import { FlashMessagesModule } from 'angular2-flash-messages';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { registerLocaleData } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {NgxDatesPickerModule}from 'ngx-dates-picker';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { CustomersigninComponent } from './customersignin/customersignin.component';
import { UserComponent } from './user/user.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
// import { NgImageSliderModule } from 'ng-image-slider';
// import { NgImageSliderModule } from 'ng-image-slider';





@NgModule({
  declarations: [
    AppComponent,
    StaffsignupComponent,
    AdminComponent,
    CustomersigninComponent,
    UserComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxSpinnerModule,
    FlashMessagesModule.forRoot(),
    MatStepperModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatCardModule,
    MatSlideToggleModule,
    ZXingScannerModule,
    MatTooltipModule,
    MatGridListModule,
    MatListModule,
    MatRadioModule,
    NgMultiSelectDropDownModule,
    NgbTimepickerModule,
    ScrollingModule,
    DragDropModule,
    NgxDatatableModule,
    NgxMaterialTimepickerModule,
    NgxDatesPickerModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatSnackBarModule,
    // NgImageSliderModule
    // NgImageSliderModule

  ],
  schemas:[NO_ERRORS_SCHEMA], 
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
