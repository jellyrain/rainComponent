import { TemplateParser } from '../templateParser/index'
import { mousePetInterface } from './interface'
import { template } from './template'
import { give } from './event'

class MousePet {
    template?: TemplateParser
    times?: NodeJS.Timer
    constructor(options: mousePetInterface) {
        this._init(options)
    }
    _init(options: mousePetInterface) {
        this.template = new TemplateParser(template)
        this.template.mount()
        this.times = give((this.template.refs as any).mousePet, options)
    }
}

export { MousePet }