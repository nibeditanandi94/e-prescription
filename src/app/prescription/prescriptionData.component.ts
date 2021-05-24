import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';

@Component({
    selector: 'app-prescription-data',
    templateUrl: './prescriptionData.component.html',
    styleUrls: ['./prescriptionData.component.css']
  })

  export class PrescriptionDataComponent implements OnInit{
    constructor(private userService:UserService) { }
    ngOnInit(): void{}
   
    onGetPatientData(){
        this.userService.getPatientData().subscribe((res) => {
         console.log(res);
        });
    }

  }