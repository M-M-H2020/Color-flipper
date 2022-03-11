import { btn, color } from './utils/elements'

btn.addEventListener('click', () => {
    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let rgbColor = `RGB(${red},${green},${blue})`

    document.body.style.backgroundColor = rgbColor
    color.textContent = rgbColor
})
