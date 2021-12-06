import { live2dObject, params, createDialog, createElement, changeModel, destroy } from './communal'

export function welcome() {
    if (document.referrer !== '' && document.referrer.indexOf(live2dObject.url) === -1) {
        let referrer = document.createElement('a')
        referrer.href = document.referrer
        params.content.referer ? createDialog(params.content.referer.replace(/%t/, "“" + referrer.hostname + "”")) : createDialog("欢迎 “" + referrer.hostname + "” 的朋友, 来到本分享小站！！！")
    } else if (params.tips) {
        let content;
        const hour = new Date().getHours()

        if (hour > 22 || hour <= 5) {
            content = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛'
        }
        else if (hour > 5 && hour <= 8) {
            content = '早上好呀！'
        }
        else if (hour > 8 && hour <= 11) {
            content = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！'
        }
        else if (hour > 11 && hour <= 14) {
            content = '中午了，工作了一个上午，现在是午餐时间！'
        }
        else if (hour > 14 && hour <= 17) {
            content = '午后很容易犯困呢，今天的运动目标完成了吗？'
        }
        else if (hour > 17 && hour <= 19) {
            content = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~'
        }
        else if (hour > 19 && hour <= 21) {
            content = '晚上好，今天过得怎么样？'
        }
        else if (hour > 21 && hour <= 23) {
            content = '已经这么晚了呀，早点休息吧，晚安~'
        }

        createDialog(content)
    }
    else {
        createDialog(params.content.welcome || "欢迎来到本站！")
    }
}
// 触摸
export function touch() {
    live2dObject.canvas.onclick = () => {
        createDialog(params.content.touch || ["你在干什么？", "再摸我就报警了！", "HENTAI!", "不可以这样欺负我啦！", '放开你的手！'])
    }
}
// 交互按钮
export function button() {
    const elementType = params.button.elementType
    params.button.element.forEach((element) => {
        const el = createElement(elementType, { class: element.name })

        if (element.name === 'home') el.onclick = () => {
            location.href = live2dObject.url
        }
        if (element.name === 'skin') el.onclick = () => {
            loadlive2d("live2d", params.models[changeModel()])
            createDialog(element.content[1])
        }
        if (element.name === 'close') el.onclick = () => {
            destroy()
        }

        if (element.name !== 'home' && element.name !== 'skin' && element.name !== 'close') {
            if (element.custom) {
                el.onclick = () => {
                    eval(element.script)
                }
            }
        }

        el.onmouseover = () => {
            if (element.name === 'skin') {
                createDialog(element.content[0])
            } else {
                createDialog(element.content)
            }
        }

        if (elementType === 'span') {
            el.style.backgroundImage = `url(${element.backgroundUrl})`
        } else if (elementType === 'i') {
            el.className = `${element.name} ${element.class}`
        }

        live2dObject.interactiveMenu.appendChild(el)
    })
}
// 自定义触发器
export function custom() {
    params.custom.forEach((c) => {
        let el = document.querySelectorAll(c.selector)
        if (el) {
            for (const i in el) {
                el[i].onmouseover = () => {
                    createDialog(c.content)
                }
            }
        }
    })
}