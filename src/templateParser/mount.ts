import { astInterface } from './interface'

let refs: any = {}

function createElement(ast: astInterface): HTMLElement {
    const el: HTMLElement = document.createElement(ast.sel)

    if (ast.data !== {}) {
        for (let key in ast.data) {
            if (key === 'ref') {
                refs[(ast.data as any)[key]] = el
            } else {
                el.setAttribute(key, (ast.data as any)[key])
            }
        }
    }

    if (ast.text != undefined) el.innerText = ast.text

    if (ast.children !== []) {
        const fragment = document.createDocumentFragment()
        for (let i: number = 0; i < ast.children.length; i++) {
            fragment.appendChild(createElement(ast.children[i]))
        }
        el.appendChild(fragment)
    }

    ast.elm = el
    return el
}

/* 挂载模板 */
function mount(ast: astInterface): object {
    refs = {}
    const el = createElement(ast)
    document.body.appendChild(el)
    return refs
}

function mountByElement(el: HTMLElement, ast: astInterface): object {
    refs = {}
    el.parentNode!.insertBefore(createElement(ast), el)
    el.parentNode!.removeChild(el)
    return refs
}

export { mount, mountByElement }