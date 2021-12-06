import * as mode from './mode'
import * as interactive from './interactive'

export let live2dObject
export let params
export let dialog

export function changeModel() {
    live2dObject.currentModel < params.models.length - 1 ? live2dObject.currentModel++ : live2dObject.currentModel = 0
    return live2dObject.currentModel
}
// 创建结构
export function createLive2d(options) {
    const home = document.createElement('section')
    home.classList.add('live2d-home')
    const interaction = document.createElement('div')
    interaction.classList.add('live2d-interaction')
    const canvas = document.createElement('canvas')
    canvas.id = 'live2d'
    canvas.width = 250
    canvas.height = 320
    live2dObject = {
        currentModel: 0,
        interactiveMenu: interaction,
        canvas: canvas,
        live2dHome: home,
        url: document.location.protocol + '//' + document.location.hostname + '/'
    };
    params = options;
    dialog = createElement("div", { class: "live2d-dialog" });
    home.appendChild(interaction)
    home.appendChild(canvas)
    home.appendChild(dialog)
    document.body.append(home)
    if (options.hidden === true && window.innerWidth < 400) {
        home.classList.add('hidden');
    } else {
        interactive.welcome();

        home.classList.add(options.longitudinal || 'bottom');
        home.classList.add(options.horizontal || 'left');
        interaction.classList.add(options.interactionlf || 'right');

        switch (options.mode) {
            case 'static': mode.statice(); break;
            case 'fixed': mode.fixed(); break;
            case 'fixedbtn': mode.fixedbtn(); break;
            case 'drag': mode.drag(); break;
            case 'dragbtn': mode.dragbtn(); break;
        }

        if (options.custom) interactive.custom();

        // loadlive2d(canvas id, 模型 json)
        loadlive2d('live2d', options.models[0]);
    }
}
// 创建元素
export function createElement(element, params) {
    const el = document.createElement(element)
    if (params.class) el.className = params.class
    return el
}
// 数组随机
export function random(array) {
    return array[Math.floor(Math.random() * array.length)]
}
// 对话框操控
export function createDialog(content) {
    if (content.constructor === Array) {
        dialog.innerText = random(content)
    } else if (content.constructor === String) {
        dialog.innerText = content
    } else {
        dialog.innerText = '你设置的对话出现问题了 X_X ！！！'
    }

    dialog.classList.add('drag')

    let time

    clearTimeout(time)
    time = setTimeout(() => {
        dialog.classList.remove('drag')
    }, 2000)
}
// 删除
export function destroy() {
    live2dObject.live2dHome.parentNode.removeChild(live2dObject.live2dHome)
}