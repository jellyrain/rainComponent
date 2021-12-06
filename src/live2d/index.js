import { createLive2d } from './communal'
import './live2d.css'

export class live2d {
    constructor(options) {
        createLive2d(options)
    }
    version = '2.0.0'
}