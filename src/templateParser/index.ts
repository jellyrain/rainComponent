import { astInterface } from './interface'
import { parser } from './parser'
import { mount, mountByElement } from './mount'

class TemplateParser {
    template?: string
    ast?: astInterface
    refs?: object
    constructor(template: string) {
        this._init(template)
    }
    _init(template: string) {
        this.template = template
        this.ast = parser(template)
    }
    mount = (): void => {
        this.refs = mount(this.ast!)
    }
    mountByElement = (el: HTMLElement): void => {
        this.refs = mountByElement(el, this.ast!)
    }
}

export { TemplateParser }