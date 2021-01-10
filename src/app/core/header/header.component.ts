import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userRegistered=false;
  constructor(private registerService:RegisterService, private auth:AngularFireAuth) { }

  ngOnInit(): void {
    this.registerService.isRegisteredUser.subscribe(isRegistered =>
      {
        this.userRegistered=isRegistered;
      });
  }

  onLogout(){
    this.auth.signOut();
 }
  
}