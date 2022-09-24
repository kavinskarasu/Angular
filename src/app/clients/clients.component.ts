import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor() { }

clients=[
  {fistName:"kaviarasu",lastName:"arasu",clientId:12},
  {fistName:"raja",lastName:"ramash",clientId:23},
  


]





  ngOnInit(): void {
  }

}
