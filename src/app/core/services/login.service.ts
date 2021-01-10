import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth:AngularFireAuth) { }

  login(loginData:{email:string,password:string}){
 return this.auth.signInWithEmailAndPassword(loginData.email,loginData.password);
  }
}
