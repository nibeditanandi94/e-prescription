import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard} from '@angular/fire/auth-guard';
import{redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { PatientListComponent } from './core/patient-list/patient-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);


const routes: Routes = [
  {path:'login', 
  component:LoginComponent},

  {path:'',
  component:HomeComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
  },
  
  {path:'',
  component:PatientListComponent,
  canActivate:[AngularFireAuthGuard],
  data:{authGuardPipe : redirectUnauthorizedToLogin}
  },

  {path:'**', redirectTo:'/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
