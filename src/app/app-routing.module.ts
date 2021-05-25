import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import{redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { HomeComponent } from './home/home.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientDataComponent } from './patient/patient-data/patient-data.component';
import { CoreMainComponent } from './core/core-main.component';
import { LoginComponent } from './login/login.component';
import { PrescriptionDataComponent } from './prescription/prescriptionData.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {path:'',
   redirectTo: '/login',
  pathMatch: 'full'},
  
  {path:'home',
  component:HomeComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
  },
  
  {path:'patientlist',
  component:PatientListComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
  },
 {
  path : 'patientdata',
  component :  PatientDataComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
 },
 {
   path : 'prescriptiondata',
   component: PrescriptionDataComponent,
   canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
 }
  
 // {path:'**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
