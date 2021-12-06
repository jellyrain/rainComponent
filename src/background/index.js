import { createElement, give } from './communal'
import './background.css'

export class background {
    constructor(options) {
        createElement(options)
        give(options)
    }
    version = '2.5.0'
}