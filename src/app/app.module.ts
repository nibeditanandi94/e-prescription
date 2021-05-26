import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {AngularFirestoreModule} from '@angular/fire/firestore';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
