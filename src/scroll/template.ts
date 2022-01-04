import styles from './scroll.scss'
const { scrollBar, scroll } = styles

const template = /* html */`
<section id="${scrollBar}">
    <div class="${scroll}" ref='scroll'></div>
</section>
`

export { template }