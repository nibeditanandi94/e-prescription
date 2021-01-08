import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreMainComponent } from './core-main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from '../login/login.module';
import { SignupModule } from '../signup/signup.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [CoreMainComponent, HeaderComponent, FooterComponent, HomeComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LoginModule,
    SignupModule
  ],
  exports:[CoreMainComponent]
})
export class CoreModule { }
