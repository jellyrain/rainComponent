import { createFixed } from './createElement'
import { musicEvent } from './event'
import { NeteaseCloudMusicApi } from './NeteaseCloudMusicApi'

import './iconfont.css'
import './music.css'

export class music {
    constructor(options) {
        const doc = createFixed()
        const songList = NeteaseCloudMusicApi(options.url, options.playlistId)
        musicEvent(doc, songList)
    }
    version = '1.2.0'
}