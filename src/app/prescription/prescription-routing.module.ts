import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionDataComponent } from './prescriptionData.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes : Routes = [
 
  {path:"",
   component: PrescriptionDataComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [RouterModule]
  
})
export class PrescriptionRoutingModule { }
