import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor( private auth:AngularFireAuth) { }

  createUser(registerData:{email:string, password:string}){
 return this.auth.createUserWithEmailAndPassword(registerData.email,registerData.password);
  }
}
