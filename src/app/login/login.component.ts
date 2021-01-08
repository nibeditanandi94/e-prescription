import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isSignedIn=false
  constructor(private firebaseservice:FirebaseService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user')!==null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
  }
 async onSignIn(email:string,password:string){
await this.firebaseservice.signIn(email, password)
if(this.firebaseservice.isLoggedIn)
this.isSignedIn=true
  }
}
