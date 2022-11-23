import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
    DepDatabase=[
      {nom: "informatique" ,Nbretudient:3000, nbreprof: 30 }, 
      {nom : "Mecanique"  , Nbretudient: 2500 , nbreprof : 25 },
      {nom : "Gestion" ,  Nbretudient : 2800 ,  nbreprof : 27}
    ]
    

  }


