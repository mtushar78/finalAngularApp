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
          
          var singleLight = JSON.parse(notifications.body);
          console.log("notification : ", singleLight);
          var counter=0;
          for(let i in this.lights){
            if(this.lights[i].id == singleLight.id){
              this.lights[i].isTurnedOn = singleLight.isTurnedOn;
              console.log("updating a single Data : ", this.lights[i]);

                if(this.lights[i].isTurnedOn == 1){
                  this.lights[i].isTurnedOn = "ON";
                }else{
                  this.lights[i].isTurnedOn = "OFF";
                }

              counter++;
            }
          }
          if(counter==0){
            console.log("notification : New Entry needed", JSON.parse(notifications.body));
          }
        })
    });
  }

  ngOnInit(): void {
    this.apiCallService.getAllData().subscribe(data =>{
      console.log("all Data: ", data);
      this.lights = data;
      for(let x in this.lights){
        if(this.lights[x].isTurnedOn == 1){
          this.lights[x].isTurnedOn = "ON";
        }else{
          this.lights[x].isTurnedOn = "OFF";
        }
        
      }
    })
  }

}
