import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import 'firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm:FormGroup
  constructor(private router:Router, private auth:AngularFireAuth) { }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }
  createUser(){
    const {email,password} = this.registerForm.value
    this.auth.createUserWithEmailAndPassword(email,password)
    .then(user => {
     console.log('Registered User' ,user);
     this.router.navigate(['/home']);
    });
  }
}
