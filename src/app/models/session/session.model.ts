import {Segment} from '../segment/segment.model'

export class Session{

    id: number
    gyroX: number[]
    gyroY: number[]
    gyroZ: number[]
    accelX: number[]
    accelY: number[]
    accelZ: number[]
    segments: Segment[]

    constructor(id: number, gyroX: number[], gyroY: number[], gyroZ: number[], accelX: number[], accelY: number[], accelZ: number[], segments: Segment[]){

        this.id = id
        this.gyroX = gyroX
        this.gyroY = gyroY
        this.gyroZ = gyroZ
        this.accelX = accelX
        this.accelY = accelY
        this.accelZ = accelZ
        this.segments = segments 

    }
}