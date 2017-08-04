import { Component, OnInit } from '@angular/core';
import { APIService} from '../service/api.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private api:APIService) { }


  eventlist:object[];
  ngOnInit() {
    this.api.getEventList()
             .subscribe(result=>this.eventlist = result);
  }

  buy(id:number){
    this.api.buy(id)
    .subscribe(result=> this.eventlist = result);

  }

}
