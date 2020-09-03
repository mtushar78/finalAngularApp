import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../web-socket.service';
import {ApiCallService} from '../api-call.service'

@Component({
  selector: 'app-light-list',
  templateUrl: './light-list.component.html',
  styleUrls: ['./light-list.component.scss']
})
export class LightListComponent implements OnInit {
headElements = ['ID', 'Zone', 'DB', 'Light', 'Status'];
lights:any=[];
  constructor(private webSocket:WebSocketService, private apiCallService: ApiCallService) { 
    let stompClient = this.webSocket._connect();
    stompClient.connect({}, frame => {

  // Subscribe to notification topic
        stompClient.subscribe('/topic/notification', notifications => {
          console.log("notification : ", JSON.parse(notifications.body));
          this.lights =JSON.parse(notifications.body);
            
        })
    });
  }

  ngOnInit(): void {
    this.apiCallService.getAllData().subscribe(data =>{
      console.log("all Data: ", data);
      this.lights = data;
    })
  }

}
