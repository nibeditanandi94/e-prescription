import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreMainComponent } from './core-main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginModule } from '../login/login.module';
import { SignupModule } from '../signup/signup.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [CoreMainComponent,
                 HeaderComponent, 
                 FooterComponent
                 ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    LoginModule,
    SignupModule,
    HomeModule
  ],
  exports:[CoreMainComponent]
})
export class CoreModule { }
