import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPatientData } from '../patientInterface';
import { FormArray, FormGroup } from '@angular/forms';
import { FormControl,Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
    selector: 'app-prescription-data',
    templateUrl: './prescriptionData.component.html',
    styleUrls: ['./prescriptionData.component.css']
  })

  export class PrescriptionDataComponent implements OnInit,IPatientData{
    patientsCollection : Observable<IPatientData[]>;
    selectedPatient :IPatientData= {}as any;
    prescriptionForm : FormGroup;
    private prescreptionPutData:AngularFirestoreCollection<any>;
    constructor(private userService:UserService,
                private firestore:AngularFirestore) { }
  
  patientName: string;
  patientID: string;
  patientGender: string;
  patientAge: number;
    ngOnInit(): void{
       this.onGetPatientData();
       this.prescriptionForm = new FormGroup({
        'medicines': new FormArray([]),
        'patientName' : new FormControl('',Validators.required),
        'patientAge' : new FormControl('',Validators.required),
        'patientGender' :new FormControl('',Validators.required)
      });
      this.prescriptionForm.setValue({
        'medicines':[],
        'patientName' : '',
        'patientAge'  : '',
        'patientGender' : ''
      });

      //  this.prescriptionForm.controls['patientName'].setValue(this.selectedPatient);
      //  this.prescriptionForm.controls['patientAge'].setValue(this.selectedPatient.patientAge);
      // this.prescriptionForm.controls['patientGender'].setValue(this.selectedPatient.patientGender);
     
      this.onPatientSelection();
      this.prescreptionPutData=this.firestore.collection('prescriptionfireData');
      
    }

    onPatientSelection(){
      console.log("patient selected");
      this.prescriptionForm.get('patientName').valueChanges.subscribe
      (selectedPatient => {
        if(selectedPatient!= null){
          console.log(selectedPatient);
      this.prescriptionForm.controls[('patientAge')].patchValue(selectedPatient.patientAge);
      this.prescriptionForm.get('patientAge').disable();
      this.prescriptionForm.controls[('patientGender')].patchValue( selectedPatient.gender);
      this.prescriptionForm.get('patientGender').disable();
        }
      });
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

   
    onAddMedicines(){
      const formInput = new FormControl(null,Validators.required);
      (<FormArray> this.prescriptionForm.get('medicines')).push(formInput) 
     }
  
     getControls(){
      return (this.prescriptionForm.get('medicines') as FormArray).controls
    }
    submit(value:any){
      console.log(value);
     // console.log(this.prescriptionForm.getRawValue())
     // this.getControls();
      this.prescreptionPutData.add(value).then(res=>
        {
          console.log("Prescription data added to the firebase Database");
      }).catch(err=>console.log(err))
      
      this.resetPrescription();
    };
    resetPrescription(){
      (<FormArray> this.prescriptionForm.get('medicines')).clear();
      this.prescriptionForm.reset();
    }

  }
