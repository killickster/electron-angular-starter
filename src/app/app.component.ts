import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import {SessionsService} from './services/session-service/sessions.service'
import { Session } from './models/session/session.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  sessions: Session[]
  selectedSession: Session
  collapsed = true 


  constructor(private sessionsService: SessionsService){
  }

  ngOnInit(){
    this.sessions = this.sessionsService.getSessions()
  }

  ngAfterViewInit(){
  }

  sessionSelected(session: Session){
    this.selectedSession = session
    console.log('session selected')
  }
}
