export default function getRand(colors, minR, maxR){
    const randVal = Math.floor(Math.random() * (maxR-minR + 1)) + minR
    return colors[randVal]
}