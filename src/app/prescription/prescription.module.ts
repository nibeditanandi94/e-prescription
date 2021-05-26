import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionDataComponent } from './prescriptionData.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrescriptionRoutingModule } from './prescription-routing.module';



@NgModule({
  declarations: [PrescriptionDataComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrescriptionRoutingModule
  ],

  exports: [PrescriptionDataComponent]
})
export class PrescriptionModule { }
