import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import{redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { HomeComponent } from './home/home.component';
import { PatientModule } from './patient/patient.module';


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
{
  path : "patientlist",
  loadChildren : ()=> PatientModule

},
{
  path : "patientdata",
  loadChildren : ()=> PatientModule

},

 {
   path : "prescriptiondata",
   loadChildren : "../app/prescription/prescription.module#PrescriptionModule"
 }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
