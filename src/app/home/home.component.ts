import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //declaring the collection,how data will be stored
  private prescreptionForm:AngularFirestoreCollection<any>;

  homeReactiveForm:FormGroup;
  genders=['male','female'];
  constructor(private firestore:AngularFirestore) { }

  ngOnInit(): void {
    this.prescreptionForm=this.firestore.collection('patientData');
    this.homeReactiveForm = new FormGroup({
      'medicines': new FormArray([]),
      'gender':new FormControl('female'),
      'patientName': new FormControl(
        null,[Validators.required
        ]),
      'patientAge': new FormControl(
        null,[Validators.required
        ]),
      
    });

    this.homeReactiveForm.setValue({
      'patientName': '',
      'patientAge' : '',
      'gender': '',
      'medicines':[]
    });

   
}
  onAddMedicines(){
    const formInput = new FormControl(null,Validators.required);
    (<FormArray> this.homeReactiveForm.get('medicines')).push(formInput) 
   }

   getControls(){
    return (this.homeReactiveForm.get('medicines') as FormArray).controls
  }

  submit(value:any){
    console.log(value);
    this.prescreptionForm.add(value).then(res=>
      {
        console.log("Patient Data added to the firebase Database");
    }).catch(err=>console.log(err))
  };
}
