import styles from './background.scss'
const { bgSlideshow } = styles

const template = /* html */`
<section id="${bgSlideshow}">
    <ul ref='background'></ul>
</section>
`

export { template }