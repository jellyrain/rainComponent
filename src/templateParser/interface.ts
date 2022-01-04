interface astInterface {
    sel: string,
    data: object,
    children: astInterface[],
    text: string | undefined,
    elm?: HTMLElement
}

export { astInterface } 