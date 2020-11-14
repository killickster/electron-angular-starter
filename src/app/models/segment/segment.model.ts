import {Mask} from '../mask/mask.model'



export class Segment {

    id: number
    beginMicroseconds: number
    endMicroseconds: number
    sessionId: number
    threeDimensionalData: number[]
    elevationData: number[]
    lateralData: number[]
    masks: Mask[]

    constructor(id: number, beginMicroseconds: number, endMicroseconds: number, sessionId: number, threeDimensionalData: number[], elevationData: number[], lateralData: number[], masks: Mask[]){
        this.id = id 
        this.beginMicroseconds = beginMicroseconds
        this.endMicroseconds = endMicroseconds
        this.sessionId = sessionId
        this.threeDimensionalData = threeDimensionalData
        this.elevationData = elevationData
        this.lateralData = lateralData
        this.masks = masks
    }
    


}