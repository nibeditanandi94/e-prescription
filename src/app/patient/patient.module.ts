import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing.module';



@NgModule({
  declarations: [PatientDataComponent,
                 PatientListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientRoutingModule
  ],
  exports:[PatientDataComponent]

})
export class PatientModule { }
