import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  isRegisteredUser = new Subject<boolean>();
  constructor( private auth:AngularFireAuth) { }

  createUser(registerData:{email:string, password:string}){
 return this.auth.createUserWithEmailAndPassword(registerData.email,registerData.password);
  }
}
