import { TemplateParser } from '../templateParser/index'
import { musicOptions } from './interface'
import { template } from './template'
import { give } from './event'

class Music {
    template?: TemplateParser
    constructor(options: musicOptions) {
        this._init(options)
    }
    _init(options: musicOptions) {
        this.template = new TemplateParser(template)
        this.template.mount()
        give(this.template.refs, options.songList)
    }
}

export { Music }