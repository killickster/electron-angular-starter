import { Component, OnInit, Input } from '@angular/core';
import { Segment } from '../models/segment/segment.model';

@Component({
  selector: 'tr[app-table-element]',
  templateUrl: './table-element.component.html',
  styleUrls: ['./table-element.component.css']
})
export class TableElementComponent implements OnInit {

  @Input() segment: Segment

  constructor() { }

  ngOnInit(): void {
  }

}
