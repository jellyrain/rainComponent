import './main.scss'
import { scrollOptions } from './scroll/interface'
import { Scroll } from './scroll/index'

import { backgroundOptions } from './background/interface'
import { Background } from './background/index'

import { mousePetInterface } from './mousePet/interface'
import { MousePet } from './mousePet/index'

import { musicOptions } from './music/interface'
import { Music } from './music/index'

function scroll(options: scrollOptions): Scroll {
    return new Scroll(options)
}

function background(options: backgroundOptions): Background {
    return new Background(options)
}

function mousePet(options: mousePetInterface): MousePet {
    return new MousePet(options)
}

function music(options: musicOptions): Music {
    return new Music(options)
}

export { scroll, background, mousePet, music }