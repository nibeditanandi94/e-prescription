import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  constructor(private router:Router, private userservice:UserService) { }

  ngOnInit(): void {
      this.loginForm=new FormGroup({
      email: new FormControl('',[Validators.required,
                                 Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', Validators.required)
    });
  }
  
  onLogin(){
    const {email,password} = this.loginForm.value
    this.userservice.login(this.loginForm.value)
    .then(loginuser => {
     console.log('LoggedIn User' ,loginuser);
     this.userservice.isLoggedUser.next(true)
     this.router.navigate(['/home']);
    });
  }
}
