import { get } from './ajax'

export function NeteaseCloudMusicApi(url, playlistId) {
    const songList = []
    get(`${url}/playlist/track/all?id=${playlistId}`, res => {
        res = res.songs
        res.forEach(item => {
            get(`${url}/song/detail?ids=${item.id}`, res => {
                res = res.songs[0]
                const obj = {
                    picUrl: res.al.picUrl,
                    songName: res.name,
                    singerName: res.ar[0].name
                }
                get(`${url}/song/url?id=${res.id}&br=320000`, res => {
                    res = res.data[0]
                    obj.audioUrl = res.url
                    songList.push(obj)
                })
            })
        })
    })
    return songList
}

