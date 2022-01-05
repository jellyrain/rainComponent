interface songInterface {
    picUrl: string,
    songName: string,
    singerName: string,
    audioUrl: string
}

interface musicOptions {
    songList: songInterface[]
}

export { songInterface, musicOptions }