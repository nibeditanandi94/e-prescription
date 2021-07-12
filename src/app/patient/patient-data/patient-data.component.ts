import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {from} from 'rxjs';

@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})
export class PatientDataComponent implements OnInit {

  private patientDocument: AngularFirestoreCollection<any>;
  patientReactiveForm: FormGroup;
  genders = ['male', 'female'];
  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.patientDocument = this.firestore.collection('patientDocument')
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
     from(this.patientDocument.add(value).then (res =>{
     })).subscribe(patientdata =>{
       console.log("patient data added to the firebase database");
     })    
     this.patientReactiveForm.reset();
    };
  }
