import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../web-socket.service'

@Component({
  selector: 'app-light-list',
  templateUrl: './light-list.component.html',
  styleUrls: ['./light-list.component.scss']
})
export class LightListComponent implements OnInit {
lights:any=[];
  constructor(private webSocket:WebSocketService) { 
    let stompClient = this.webSocket._connect();
    stompClient.connect({}, frame => {

  // Subscribe to notification topic
        stompClient.subscribe('/topic/notification', notifications => {
          console.log("notification : ", JSON.parse(notifications.body));
          var val =JSON.parse(notifications.body);
            this.notifications = val.name;
        })
    });
  }

  ngOnInit(): void {
  }

}
