import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private acctivated:ActivatedRoute) { 
    this.acctivated.params.subscribe((params)=>{
      console.log(params)
    })
  }

  ngOnInit(): void {
  }

}
