import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
//import { UserService } from './core/services/user.service';

/*export function login(userService: UserService) {
 return() => userService.login;
}*/

export function logOut(auth: AngularFireAuth) {
  return() => auth.signOut;
 }

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyDE9P4BkVS7w87VW5PqglTuD-BWXBkRYuY",
    authDomain: "eprescription-5f391.firebaseapp.com",
    projectId: "eprescription-5f391",
    storageBucket: "eprescription-5f391.appspot.com",
    messagingSenderId: "581072553879",
    appId: "1:581072553879:web:31c653ab030acf49ae26d2"}),
    AngularFirestoreModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory : logOut,
      deps: [AngularFireAuth],
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
