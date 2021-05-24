import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionDataComponent } from './prescriptionData.component';



@NgModule({
  declarations: [PrescriptionDataComponent],
  imports: [
    CommonModule
  ],

  exports: [PrescriptionDataComponent]
})
export class PrescriptionModule { }
