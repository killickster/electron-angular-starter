import { Component, OnInit, Input } from '@angular/core';
import { Session } from '../models/session/session.model';
import { Segment } from '../models/segment/segment.model';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  @Input() session: Session

  currentlySelectedSegment: Segment


  constructor() { }

  ngOnInit(): void {
    console.log(this.session)
  }

  selectSegment(segment: Segment){
    this.currentlySelectedSegment= segment
    console.log(this.currentlySelectedSegment)
  }

  mousedOver(segment: Segment){
    console.log(segment)
  }

}
