import { scrollOptions } from './interface'
import styles from './scroll.scss'
const { rainbow } = styles

function give(element: HTMLDivElement, options: scrollOptions): void {
    if (options.style === 'rainbow-gradient') {
        element.classList.add(rainbow)
    }
    if (options.style === 'gradient') {
        element.style.background = `linear-gradient(to top, ${options.colour[0]}, ${options.colour[1]})`
    }
    if (options.style === 'single-colour') {
        Array.isArray(options.colour) ? element.style.backgroundColor = options.colour[0] : element.style.backgroundColor = options.colour
    }
    window.onscroll = function () {
        const height = pageYOffset / (document.body.scrollHeight - innerHeight) * 100
        element.style.height = height + '%'
    }
}
export { give }