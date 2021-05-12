import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeReactiveForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.homeReactiveForm = new FormGroup({
      'medicines': new FormArray([]),
    });

    this.homeReactiveForm.setValue({
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

  submit(){
    console.log(this.homeReactiveForm);
  }
}
