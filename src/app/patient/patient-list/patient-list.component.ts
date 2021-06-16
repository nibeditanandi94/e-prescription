import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/core/services/user.service';
import { IDocData } from '../../docDataInterface';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, IDocData {
  docDataCollection: Observable<IDocData[]>;
  private dashBoardData: AngularFirestoreCollection<any>;


  constructor(private firestore: AngularFirestore,
    private userservice: UserService) { }

  docId: string;
  fname: string;
  ngOnInit(): void {
    //this.getDoctorId();
    this.dashBoardData = this.firestore.collection('prescriptionfireData');

    // this.docDataCollection.subscribe(value =>{
    //   this.dashBoardData.add(value).then(res=>{
    //     console.log("docdata added into prescription form");
    //       });
    //   console.log(value);
    // });
    //this.getdocId();

  }
  // getDoctorId(){
  // this.docDataCollection = this.userservice.getDocId().pipe(
  //   map (actions => actions.map (a=> {
  //     const data = a.payload.doc.data() as IDocData;
  //     const id = a.payload.doc.id;
  //      return{id, ...data};

  //     }))
  //     );

  //     this.docDataCollection.subscribe(docData=>{
  //       console.log(docData);
  //     })
  //   }

  getdocId() {
    this.firestore.collection('doctorsData').get().subscribe((snapshot) => {
      snapshot.docs.forEach(doc => {
        console.log(doc.id);
        console.log(doc.data());
        // console.log(doc.data().docId);
        this.dashBoardData.add(doc.data()).then(res => {
          console.log("Prescription data added to the firebase Database");
          console.log(this.dashBoardData);
        }).catch(err => console.log(err))


        // this.dashBoardData.add(doc.data().fname).then(res=>
        //   {
        //     console.log("Prescription data added to the firebase Database");
        // }).catch(err=>console.log(err))
      })
    });

    // getPatientData(){
    //   this.pItem.subscribe(item => {
    //   console.log(item);
    //  })

    // }
  }
}
