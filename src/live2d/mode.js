import { live2dObject } from './communal'
import { touch, button } from './interactive'

export function statice() {
    live2dObject.live2dHome.classList.add('static')
}
export function fixed() {
    touch()
}
export function fixedbtn() {
    touch()
    button()
}
export function drag() {
    this.fixed()
    const home = live2dObject.live2dHome
    home.onmousedown = function () {
        const location = {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        }

        function drag() {
            home.classList.add('drag');
            home.classList.remove('right', 'bottom', 'center')
            home.style.left = (event.clientX - location.x) + 'px'
            home.style.top = (event.clientY - location.y) + 'px'
        }

        // 注册 拖动 监听器
        document.addEventListener('mousemove', drag)
        // 注册 鼠标抬起 监听器
        document.addEventListener("mouseup", function () {
            // 删除 拖动 
            home.classList.remove('drag')
            document.removeEventListener('mousemove', drag)
        })
    }

}
export function dragbtn() {
    this.fixedbtn()
    const home = live2dObject.live2dHome
    home.onmousedown = function () {
        const location = {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        }

        function drag() {
            home.classList.add('drag');
            home.classList.remove('right', 'bottom', 'center')
            home.style.left = (event.clientX - location.x) + 'px'
            home.style.top = (event.clientY - location.y) + 'px'
        }

        // 注册 拖动 监听器
        document.addEventListener('mousemove', drag)
        // 注册 鼠标抬起 监听器
        document.addEventListener("mouseup", function () {
            // 删除 拖动 
            home.classList.remove('drag');
            document.removeEventListener('mousemove', drag)
        });
    }
}