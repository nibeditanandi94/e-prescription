import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PatientDataComponent,
                 PatientListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[PatientDataComponent]

})
export class PatientModule { }
