import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard ,redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientDataComponent } from './patient-data/patient-data.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes : Routes = [
  {
    path : "patientdata",
    component :  PatientDataComponent,
    canActivate:[AngularFireAuthGuard],
    data:{authGuardPipe : redirectUnauthorizedToLogin}
   },
  {path:"patientlist",
  component:PatientListComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
  },
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PatientRoutingModule { }
