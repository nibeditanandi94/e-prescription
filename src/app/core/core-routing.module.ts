import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import{redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { LoginRoutingModule } from '../login/login-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
const redirectUnauthorizedToLogin =() =>redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {path:'home', component:HomeComponent,
   canActivate:[AngularFireAuthGuard],
   data:{authGuardPipe:redirectUnauthorizedToLogin},
  },
  {path:'Patientlist', component:PatientListComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin},}
];

@NgModule({
  imports: [RouterModule.forChild(routes),LoginRoutingModule],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
