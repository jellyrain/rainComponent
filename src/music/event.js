export function musicEvent(doc, songList) {
    const audio = doc.createAudio

    // 播放 暂停
    let playPause = false

    // 歌单列表
    let listOpen = false

    doc.cover.onclick = () => {
        if (playPause) {
            doc.cover.classList.replace('pause', 'play')
            doc.playPause.classList.replace('icon-pause', 'icon-play')
            doc.songList.children[song].classList.remove('select')
            playPause = !playPause
            audio.pause()
        } else {
            doc.cover.classList.replace('play', 'pause')
            doc.playPause.classList.replace('icon-play', 'icon-pause')
            doc.songList.children[song].classList.add('select')
            playPause = !playPause
            audio.play()
        }
    }

    // 播放进度条
    setInterval(() => {
        var ratio = audio.currentTime / audio.duration
        doc.played.style.width = ratio * 100 + '%'
    }, 100)

    function progress() {
        const ev = event || window.event
        const totalWidth = doc.bar.offsetWidth
        const totalX = doc.infoBottom.offsetLeft
        const mouseX = ev.pageX
        const ratio = (mouseX - totalX) / totalWidth
        return ratio
    }

    doc.bar.onclick = () => {
        const ratio = progress()
        doc.played.style.width = ratio * 100 + '%'
        audio.currentTime = audio.duration * ratio
    }

    // 音量
    function volumeProgress() {
        const ev = event || window.event
        const totalWidth = doc.volumeBar.offsetHeight
        const totalY = doc.jellyrain_music.offsetTop + 49
        const mouseY = ev.pageY
        const ratio = (totalY - mouseY) / totalWidth
        return ratio
    }

    audio.volume = 1
    doc.volumePlayed.style.height = '100%'

    doc.volumeBar.onclick = () => {
        const ratio = volumeProgress()
        doc.volumePlayed.style.height = ratio * 100 + '%'
        if (audio.muted) {
            doc.volumeButton.classList.replace('icon-guanbiyinliang', 'icon-jiadayinliang')
            audio.muted = !audio.muted
        }
        audio.volume = ratio
    }

    doc.volumeButton.onclick = () => {
        if (audio.muted) {
            doc.volumeButton.classList.replace('icon-guanbiyinliang', 'icon-jiadayinliang')
            doc.volumePlayed.style.height = audio.volume * 100 + '%'
        } else {
            doc.volumeButton.classList.replace('icon-jiadayinliang', 'icon-guanbiyinliang')
            doc.volumePlayed.style.height = 0
        }
        audio.muted = !audio.muted
    }

    // 收放
    let openClose = false
    doc.openClose.onclick = () => {
        if (openClose) {
            doc.openCloseButton.classList.replace('icon-greaterthan', 'icon-lessthan')
            doc.fixed.classList.remove('closed')
            doc.songList.classList.remove('closed')
            if (listOpen) {
                if (songList.length > 5) {
                    doc.songList.style.height = '255px'
                } else {
                    doc.songList.style.height = `${song * 51}px`
                }
            }
            openClose = !openClose
        } else {
            doc.openCloseButton.classList.replace('icon-lessthan', 'icon-greaterthan')
            doc.fixed.classList.add('closed')
            doc.songList.classList.add('closed')
            doc.songList.style.height = 0
            openClose = !openClose
        }
    }

    // 播放音乐
    let song = 0

    function loading() {
        audio.src = songList[song].audioUrl
        doc.cover.style.backgroundImage = `url(${songList[song].picUrl})`
        doc.title.innerText = `${songList[song].songName} - ${songList[song].singerName}`
    }

    const firstLoading = setInterval(() => {
        if (songList.length > 0) {
            loading()
            clearTimeout(firstLoading)
        }
    }, 300)

    function backward() {
        doc.songList.children[song].classList.remove('select')
        song--
        if (song < 0) {
            song = songList.length - 1
        }
        loading()
        doc.songList.children[song].classList.add('select')
        doc.cover.classList.replace('play', 'pause')
        doc.playPause.classList.replace('icon-play', 'icon-pause')
        audio.play()
    }

    function forward() {
        doc.songList.children[song].classList.remove('select')
        song++
        if (song >= songList.length) {
            song = 0
        }
        loading()
        doc.songList.children[song].classList.add('select')
        doc.cover.classList.replace('play', 'pause')
        doc.playPause.classList.replace('icon-play', 'icon-pause')
        audio.play()
    }
    audio.addEventListener('ended', forward)

    doc.backward.onclick = backward
    doc.forward.onclick = forward

    // 歌单列表
    let firstList = false

    function liList() {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < songList.length; i++) {
            const el = document.createElement('li')
            el.innerHTML = `<span></span><span>${i + 1}</span><span>${songList[i].songName}</span><span>${songList[i].singerName}</span>`
            fragment.appendChild(el)
        }
        doc.songList.appendChild(fragment)
    }

    doc.listButton.onclick = () => {
        if (!firstList) {
            liList()
            firstList = !firstList
        }
        if (listOpen) {
            doc.songList.style.height = 0
        } else {
            if (songList.length > 5) {
                doc.songList.style.height = '255px'
            } else {
                doc.songList.style.height = `${songList.length * 51}px`
            }
        }
        listOpen = !listOpen
    }

    doc.songList.onclick = e => {
        doc.songList.children[song].classList.remove('select')
        song = e.target.parentNode.children[1].innerText - 1
        loading()
        playPause = true
        doc.songList.children[song].classList.add('select')
        doc.cover.classList.replace('play', 'pause')
        doc.playPause.classList.replace('icon-play', 'icon-pause')
        audio.play()
    }
}