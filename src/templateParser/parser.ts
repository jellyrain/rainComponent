import { astInterface } from './interface'

/* 删除元素间空格 */
function removeSpace(template: string): string {
    return template = template.trim().replace(/\>(\s+)\</g, '><',)
}

/* 生成ast模板 */
function generateAST(str: string): astInterface {
    let tag: string = str.replace(/\<|\>/g, '')
    let obj: astInterface = {
        sel: tag.match(/^\w+/)![0],
        data: attributes(tag),
        children: [],
        text: undefined,
    }
    return obj
}

/* 解析元素属性 */
function attributes(tag: string): object {
    const obj: any = {}
    tag = tag.replace(/\s*\//, '')
    let attr: string = tag.replace(/^\w+(\s+)?/, '').replace(/(\'|\")\s+/g, '=').replace(/(\'|\")/g, '')
    if (attr === '' || attr == undefined) return obj
    let attrArray: string[] = attr.split('=')
    for (let i: number = 0; i < attrArray.length; i += 2) {
        obj[attrArray[i]] = attrArray[i + 1]
    }
    return obj
}

/* 模板解析 */
function parser(template: string): astInterface {
    const stack: astInterface[] = []
    template = removeSpace(template)
    while (template.length) {
        /* 解析 <div> 这类型的标签头 */
        if (/(^\<[^\/][^\<\>]*[^\/]\>)|(^\<.\>)/.test(template)) {
            const el: astInterface = generateAST(template.match(/(^\<[^\/][^\<\>]*[^\/]\>)|(^\<.\>)/)![0])
            stack.push(el)
            template = template.replace(/(^\<[^\/][^\<\>]*[^\/]\>)|(^\<.\>)/, '')
            continue
        }
        /* 解析 <input /> 这类型标签 */
        if (/^\<[^\/][^\<\>]*\/\>/.test(template)) {
            const el: astInterface = generateAST(template.match(/^\<[^\/][^\<\>]*\/\>/)![0])
            if (stack.length > 1) {
                stack[stack.length - 1].children.push(el)
            } else {
                stack.push(el)
            }
            template = template.replace(/^\<[^\/][^\<\>]*\/\>/, '')
            continue
        }
        /* 解析标签内文本内容 */
        if (/^[^\<]+</.test(template)) {
            let text: RegExpMatchArray | null | string = template.match(/^[^\<]+</)
            if (text != undefined) {
                text = text![0].slice(0, -1)
                stack[stack.length - 1].text = text
                template = template.replace(/^[^\<]+</, '<')
            }
            continue
        }
        /* 解析 </div> 结束标签 */
        if (/^\<\/[^\<\>]+\>/.test(template)) {
            if (stack.length > 1) {
                let el: astInterface = stack.pop()!
                stack[stack.length - 1].children.push(el)
            }
            template = template.replace(/^\<\/[^\<\>]+\>/, '')
            continue
        }
    }
    return stack[0]
}

export { parser }