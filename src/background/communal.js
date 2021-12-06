let ul

// 创建整体结构
export function createElement(options) {
    const section = document.createElement('section')
    section.id = 'bg-slideshow'
    ul = document.createElement('ul')
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < options.imageUrl.length; i++) {
        const el = document.createElement('li')
        el.appendChild(document.createElement('span'))
        fragment.appendChild(el)
    }
    ul.appendChild(fragment)
    section.appendChild(ul)
    document.body.appendChild(section)
}

// 赋予动画 和 背景图
export function give(options) {
    let el = ul.getElementsByTagName('li')
    for (let i = 0; i < el.length; i++) {
        const e = el[i].getElementsByTagName('span')[0]
        e.style.animation = `imageAnimation ${options.time * options.imageUrl.length}s linear infinite 0s`
        e.style.animationDelay = `${options.time * i}s`
        e.style.backgroundImage = `url(${options.imageUrl[i]})`
    }
}