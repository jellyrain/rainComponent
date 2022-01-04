import { TemplateParser } from '../templateParser/index'
import { backgroundOptions } from './interface'
import { template } from './template'
import { give } from './event'

class Background {
    template?: TemplateParser
    constructor(options: backgroundOptions) {
        this._init(options)
    }
    _init(options: backgroundOptions) {
        this.template = new TemplateParser(template)
        this.template.mount()
        give((this.template.refs as any).background, options)
    }
}

export { Background }