export function createElement() {
    const jellyrain_scroll = document.createElement('section')
    jellyrain_scroll.id = 'jellyrain_scroll'
    const scroll = document.createElement('div')
    scroll.classList.add('scroll')
    jellyrain_scroll.appendChild(scroll)
    document.body.appendChild(jellyrain_scroll)
    return scroll
}