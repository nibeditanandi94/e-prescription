import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userLoggedIn=false;
  constructor(private userService:UserService,
              private auth:AngularFireAuth,
             ) { }

  ngOnInit(): void {
    this.userService.isLoggedUser.subscribe(isLoggedIn =>
      {
        this.userLoggedIn=isLoggedIn;
      });
  }

  onLogout(){
    this.auth.signOut();
    this.userService.isLoggedUser.next(false);
 }

  
}