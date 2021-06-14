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

  public signUpForm: AngularFirestoreCollection<any>;
  registerForm: FormGroup
  constructor(private router: Router,
    private userservice: UserService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.firestore.collection('doctorsData');
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required,
      Validators.minLength(6),
      ]),
      fname: new FormControl(null, [Validators.required])
    })
  }


  submit(value: any) {
    //register user and redirect to login
    const { email, password } = this.registerForm.value;
    
    this.userservice.createUser(this.registerForm.value)
      .then(doctorData => {
       console.log(doctorData.user.uid);
       const docData = {
        fname: this.registerForm.get('fname').value,
        email: this.registerForm.get('email').value,
        docId: doctorData.user.uid
      };
        this.signUpForm.add(docData).then(res => {
          console.log("submitted res"  + res);
          this.userservice.isLoggedUser.next(true);
          this.router.navigate(['/login']);
          console.log("doctor data added to firebase database");
        }).catch(err => console.log(err));


        //console.log('Registered User' ,user);

      });

    //saving doc data to firebase

  }
}
