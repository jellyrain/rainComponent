import styles from './music.scss'
const { music, fixed, card, cover, play, info, infoTop, infoBottom, title, button, bar, played, playedIcon, volumeWrap, volumeBar, volumePlayed, close, songList } = styles

const template = /* html */`
<section id="${music}" ref="jellyrain_music">
    <div class="${fixed} ${card}" ref="fixed">
        <div class="${cover} ${play}" ref="cover">
            <i class="iconfont icon-play" ref="playPause"></i>
        </div>
        <div class="${info}" ref="info">
            <div class="${infoTop}" ref="infoTop">
                <div class="${title}" ref="title"></div>
                <div class="${button}" ref="button">
                  <i class="iconfont icon-diyiyeshouyeshangyishou" ref="backward"></i>
                  <i class="iconfont icon-zuihouyiyemoyexiayishou" ref="forward"></i>
                  <i class="iconfont icon-list" ref="listButton"></i>
                </div>
            </div>
            <div class="${infoBottom}" ref="infoBottom">
                <div class="${bar}" ref="bar">
                    <div class="${played}" ref="played">
                        <span class="${playedIcon}" ref="playedIcon"></span>
                    </div>
                </div>
                <div class="${volumeWrap}" ref="volumeWrap">
                    <div class="${volumeBar}" ref="volumeBar">
                        <div class="${volumePlayed}" ref="volumePlayed"></div>
                    </div>
                    <i class="iconfont icon-jiadayinliang" ref="volumeButton"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="${close} ${card}" ref="openClose">
        <i class="iconfont icon-lessthan" ref="openCloseButton"></i>
    </div>
    <ol class="${songList} ${card}" ref="songList"></ol>
</section>
`

export { template }