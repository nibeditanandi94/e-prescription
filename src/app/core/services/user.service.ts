import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedUser = new Subject<boolean>();

  constructor(private auth:AngularFireAuth) { }

  createUser(registerData:{email:string, password:string}){
    return this.auth.createUserWithEmailAndPassword(registerData.email,registerData.password);
     }
  
     login(loginData:{email:string,password:string}){
      return this.auth.signInWithEmailAndPassword(loginData.email,loginData.password);
       }
}
