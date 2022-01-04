import { backgroundOptions } from './interface'
import styles from './background.scss'
const { imageAnimation } = styles

function give(ul: HTMLUListElement, options: backgroundOptions): void {
    const fragment = document.createDocumentFragment()
    for (let i = 0; i < options.imageUrl.length; i++) {
        const li: HTMLLIElement = document.createElement('li')
        const span: HTMLSpanElement = document.createElement('span')
        span.style.animation = `${imageAnimation} ${options.time * options.imageUrl.length}s linear infinite 0s`
        span.style.animationDelay = `${options.time * i}s`
        span.style.backgroundImage = `url(${options.imageUrl[i]})`
        li.appendChild(span)
        fragment.appendChild(li)
    }
    ul.appendChild(fragment)
}

export { give }