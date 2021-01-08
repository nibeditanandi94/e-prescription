import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignedIn=false
  constructor(private firebaseservice:FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn=true;
    else
    this.isSignedIn=false
  }

  async onSignUp(email:string,password:string){
await this.firebaseservice.signUp(email,password)
if(this.firebaseservice.isLoggedIn)
this.isSignedIn=true

  }

}
