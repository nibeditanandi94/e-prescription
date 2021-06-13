import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPatientData } from '../../patientInterface';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patientDataCollection : AngularFirestoreCollection<any>;
  pItem : Observable<IPatientData[]>;
 

  constructor(private firestore : AngularFirestore) { 
   
  
  }
 
  ngOnInit(): void {
    this.patientDataCollection = this.firestore.collection('/patientData');
    this.pItem = this.patientDataCollection.snapshotChanges().pipe( 
     map(actions => actions.map(a => {
       const data = a.payload.doc.data() as IPatientData;
       const id = a.payload.doc.id;
       return { id, ...data };
     }))
   );

    this.getPatientData();

  }

  getPatientData(){
    this.pItem.subscribe(item => {
    console.log(item);
   })
    
  }
}
