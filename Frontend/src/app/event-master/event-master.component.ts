import { Component, OnInit } from '@angular/core';
import { APIService} from '../service/api.service';

@Component({
  selector: 'app-event-master',
  templateUrl: './event-master.component.html',
  styleUrls: ['./event-master.component.css']
})
export class EventMasterComponent implements OnInit {

  constructor(private api:APIService) { }

  eventlist:object[];
  ngOnInit() {
    this.api.getEventList()
             .subscribe(result=>this.eventlist = result);
  }

  name:string="";
  date:string="";
  location:string="";
  price:number=0;
  qty:number=0;
  description:string="";

  addEvent(){
    this.api.addEvent(this.name, this.date, this.location, this.price, this.qty, this.description)
    .subscribe(result=> this.eventlist = result);


    this.name ="";
    this.date="";
    this.location="";
    this.price=0;
    this.qty=0;
    this.description="";
  }

}
