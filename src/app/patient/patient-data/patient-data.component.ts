import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {

  private patientdata: AngularFirestoreCollection<any>;
  patientReactiveForm: FormGroup;
  genders = ['male', 'female'];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.patientdata = this.firestore.collection('patientData')
    this.patientReactiveForm = new FormGroup({
      'patientName': new FormControl(
        null, [Validators.required
      ]),
      'patientAge': new FormControl(
        null, [Validators.required]),
      'gender': new FormControl('female'),
    });

    this.patientReactiveForm.setValue({
      'patientName': '',
      'patientAge': '',
      'gender': '',
    });

  }

  submit(value: any) {
    console.log(value);
    this.patientdata.add(value).then(res => {
      console.log("Patient Data added to the firebase Database");
    }).catch(err => console.log(err))
    this.patientReactiveForm.reset();
  };

}
