import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPatientData } from '../patientInterface';

@Component({
    selector: 'app-prescription-data',
    templateUrl: './prescriptionData.component.html',
    styleUrls: ['./prescriptionData.component.css']
  })

  export class PrescriptionDataComponent implements OnInit{
    patientsCollection : Observable<IPatientData[]>;
    constructor(private userService:UserService) { }
    ngOnInit(): void{
       this.onGetPatientData();

    }
   
    onGetPatientData(){
      this.patientsCollection =  this.userService.getPatientData().pipe(
        map (actions => actions.map (a=> {
        const data = a.payload.doc.data() as IPatientData;
        const id = a.payload.doc.id;
        return{id, ...data};

        }))
        );
        
    }

  }