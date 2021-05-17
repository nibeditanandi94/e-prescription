import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import{redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { PatientListComponent } from './core/patient-list/patient-list.component';
import { HomeComponent } from './home/home.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {path:'home',component:HomeComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin},
  },

  {path:'patientlist', component:PatientListComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe:redirectUnauthorizedToLogin},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
