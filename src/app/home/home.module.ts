import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import{FormArray, FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  exports:[HomeComponent]
})
export class HomeModule implements OnInit {
  
  ngOnInit(): void { 
  
  }
  
 }
