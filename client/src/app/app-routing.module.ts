import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay } from 'rxjs/operators';
import { StaffsignupComponent } from './staffsignup/staffsignup.component';
import { AuthGuard } from './services/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { CustomersigninComponent } from './customersignin/customersignin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 
  { path:"user", component:UserComponent,canActivate: [AuthGuard] },
  { path:"signup", component:StaffsignupComponent },
  { path:"admin", component: AdminComponent,canActivate: [AuthGuard] },
  { path:"login",component:CustomersigninComponent},
  { path:"home",component:HomeComponent},
  { path:"**", component:CustomersigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
