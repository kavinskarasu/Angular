import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-prodect',
  templateUrl: './prodect.component.html',
  styleUrls: ['./prodect.component.css']
})
export class ProdectComponent implements OnInit {
//parametrized routes  creating activatedRoute object with AcctivatedRoute class
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
      console.log(params)
    })
   }

  ngOnInit(): void {
  }

}


//while writring parameterized router import Acctivated routes