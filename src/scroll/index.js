import { createElement } from './createElement'
import { give } from './event'
import './scroll.css'

export class scroll {
    constructor(options) {
        const s = createElement()
        give(s, options)
    }
    version = '2.0.0'
}