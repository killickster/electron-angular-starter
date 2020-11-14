import { Injectable } from '@angular/core';
import {Session} from '../../models/session/session.model'
import { Segment } from 'src/app/models/segment/segment.model';
import { Mask } from 'src/app/models/mask/mask.model';

const filler  = [1,2,3]

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  sessions: Session[] = [new Session(1,filler,filler,filler,filler,filler,filler,[new Segment(0,1,2,0,filler,filler,filler, [new Mask(1,2)]), new Segment(1, 3,4,0,filler,filler,filler, [new Mask(1,2)])]), new Session(2,filler,filler,filler,filler,filler,filler,[]), new Session(3,filler,filler,filler,filler,filler,filler,[]) ]


  constructor() { }


  getSessions(){
    return this.sessions
  }
}
