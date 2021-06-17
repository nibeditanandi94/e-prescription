import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedUser = new Subject<boolean>();
  constructor(private auth: AngularFireAuth,
    private database: AngularFirestore) {
  }

  createUser(registerData: { email: string, password: string }) {
    return this.auth.createUserWithEmailAndPassword(registerData.email, registerData.password);
  }

  login(loginData: { email: string, password: string }) {
    return this.auth.signInWithEmailAndPassword(loginData.email, loginData.password);
  }
  getPatientData() {
    return this.database.collection("patientData").snapshotChanges();
  }
  getDoctorData() {
    return this.database.collection('doctorsData').snapshotChanges();
  }
}
