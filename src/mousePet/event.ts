import { mousePetInterface } from './interface'
function give(el: HTMLElement, options: mousePetInterface): NodeJS.Timer {
    let deg = 0, imgX = 0, imgY = 0, imgT = 0, imgL = 0, imgDeg = 0, index = 0

    el.style.backgroundImage = `url(${options.gif})`

    window.addEventListener('mousemove', e => {
        imgX = e.x - el.offsetLeft - el.clientWidth / 2
        imgY = e.y - el.offsetTop - el.clientHeight / 2
        deg = (360 * Math.atan(imgY / imgX)) / (2 * Math.PI)
        index = 0
        let x = (event as any).clientX
        imgDeg = el.offsetLeft < x ? - 180 : 0
    })

    let times = setInterval(() => {
        el.style.transform = `rotateZ(${deg}deg) rotateY(${imgDeg}deg)`
        index++
        if (index < 50) {
            imgL += imgX / 50
            imgT += imgY / 50
        }
        el.style.top = `${imgT}px`
        el.style.left = `${imgL}px`
    }, 50)
    return times
}
export { give }