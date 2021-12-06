export function createFixed() {
    const createAudio = new Audio()

    const jellyrain_music = document.createElement('section')
    jellyrain_music.id = 'jellyrain_music'

    const fixed = document.createElement('div')
    fixed.className = 'jellyrain fixed card'

    const cover = document.createElement('div')
    cover.className = 'cover play'

    const playPause = document.createElement('i')
    playPause.className = 'iconfont icon-play'

    cover.appendChild(playPause)
    fixed.appendChild(cover)

    const info = document.createElement('div')
    info.className = 'info'

    const infoTop = document.createElement('div')
    infoTop.className = 'infoTop'

    const title = document.createElement('div')
    title.className = 'title'

    const button = document.createElement('div')
    button.className = 'button'

    const backward = document.createElement('i')
    backward.className = 'iconfont icon-diyiyeshouyeshangyishou'

    const forward = document.createElement('i')
    forward.className = 'iconfont icon-zuihouyiyemoyexiayishou'

    const listButton = document.createElement('i')
    listButton.className = 'iconfont icon-list'

    button.appendChild(backward)
    button.appendChild(forward)
    button.appendChild(listButton)
    infoTop.appendChild(title)
    infoTop.appendChild(button)
    info.appendChild(infoTop)

    const infoBottom = document.createElement('div')
    infoBottom.className = 'infoBottom'

    const bar = document.createElement('div')
    bar.className = 'bar'

    const played = document.createElement('div')
    played.className = 'played'

    const playedIcon = document.createElement('span')
    playedIcon.className = 'playedIcon'

    played.appendChild(playedIcon)
    bar.appendChild(played)
    infoBottom.appendChild(bar)

    const volumeWrap = document.createElement('div')
    volumeWrap.className = 'volumeWrap'

    const volumeBar = document.createElement('div')
    volumeBar.className = 'volumeBar'

    const volumePlayed = document.createElement('div')
    volumePlayed.className = 'volumePlayed'

    const volumeButton = document.createElement('i')
    volumeButton.className = 'iconfont icon-jiadayinliang'

    volumeBar.appendChild(volumePlayed)
    volumeWrap.appendChild(volumeBar)
    volumeWrap.appendChild(volumeButton)
    infoBottom.appendChild(volumeWrap)

    info.appendChild(infoBottom)
    fixed.appendChild(info)

    const openClose = document.createElement('div')
    openClose.className = 'close card'

    const openCloseButton = document.createElement('i')
    openCloseButton.className = 'iconfont icon-lessthan'

    openClose.appendChild(openCloseButton)

    const songList = document.createElement('ol')
    songList.className = 'songList card'

    jellyrain_music.appendChild(fixed)
    jellyrain_music.appendChild(openClose)
    jellyrain_music.appendChild(songList)
    document.body.appendChild(jellyrain_music)
    return {
        jellyrain_music,
        createAudio,
        fixed,
        cover,
        playPause,
        title,
        backward,
        forward,
        listButton,
        infoBottom,
        bar,
        played,
        volumeWrap,
        volumeBar,
        volumePlayed,
        volumeButton,
        openClose,
        openCloseButton,
        songList
    }
}