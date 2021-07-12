import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
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

  validateOnRegister(formgroup:FormGroup){
    console.log("invalid form");
    Object.keys(formgroup.controls).forEach(field=>{
    console.log(field);
    const control = formgroup.get(field);
    if(control instanceof FormControl){
      control.markAsTouched({onlySelf:true});
    }
    });
  }
  
  onLogin(){
     from(this.userservice.login(this.loginForm.value)
      .then(loginuser => {
       this.userservice.isLoggedUser.next(true)
       this.router.navigate(['/home']);
      })).subscribe(docDataAtLogin => {
        console.log("Navigate to home once doctor is logged in");
      })

      if(this.loginForm.valid){
        console.log("form is valid");
      }
      else{
        this.validateOnRegister(this.loginForm);
      }
    };
}
