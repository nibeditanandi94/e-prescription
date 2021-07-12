import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

import 'firebase/auth';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public doctorDocument: AngularFirestoreCollection<any>;
  registerForm: FormGroup
  constructor(private router: Router,
    private userservice: UserService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.doctorDocument = this.firestore.collection('doctorDocument');
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(6),
      ]),
      fname: new FormControl(null, [Validators.required])
     
    })
   
  }

  validateOnRegister(formgroup:FormGroup){
    console.log("invalid form");
    Object.keys(formgroup.controls).forEach(field=>{
    console.log(field);
    const control = formgroup.get(field);
    if(control instanceof FormControl){
      control.markAsTouched({onlySelf:true});
    }
    });
  }

  submit() {
    //register user and redirect to home
    this.userservice.createUser(this.registerForm.value)
      .then(doctorData => {
        const docData = {
          fname: this.registerForm.get('fname').value,
          email: this.registerForm.get('email').value,
          docId: doctorData.user.uid
        };
        this.doctorDocument.add(docData).then(res => {
          this.userservice.isLoggedUser.next(true);
          this.router.navigate(['/home']);
          console.log("doctor data added to firebase database");
        }).catch(err => console.log(err));
      });
      if(this.registerForm.valid){
        console.log("form is valid");
      }
      else{
        this.validateOnRegister(this.registerForm);
      }
  }
}
