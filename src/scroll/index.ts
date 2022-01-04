import { TemplateParser } from '../templateParser/index'
import { scrollOptions } from './interface'
import { template } from './template'
import { give } from './event'

class Scroll {
    template?: TemplateParser
    constructor(options: scrollOptions) {
        this._init(options)
    }
    _init(options: scrollOptions) {
        this.template = new TemplateParser(template)
        this.template.mount()
        give((this.template.refs as any).scroll, options)
    }
}

export { Scroll }