import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionDataComponent } from './prescriptionData.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PrescriptionDataComponent],
  imports: [
    CommonModule,
    FormsModule
  ],

  exports: [PrescriptionDataComponent]
})
export class PrescriptionModule { }
