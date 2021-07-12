import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{
 private subscription;
  userLoggedIn=false;
  constructor(private userService:UserService,
              private auth:AngularFireAuth,
             ) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.userService.isLoggedUser.subscribe(isLoggedIn =>
      {
        this.userLoggedIn=isLoggedIn;
      });
  }

  onLogout(){
    this.auth.signOut();
    this.userService.isLoggedUser.next(false);
 }

  
}