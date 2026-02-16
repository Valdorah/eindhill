import GossipCardElement from "../webComponents/GossipCardElement.js"

window.onload = () => {
    customElements.define("app-gossip-card", GossipCardElement)

    const form = document.querySelector('form')

    form.addEventListener('submit', handleSubmit)
}

const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const result = splitString(formData.get('gossip'), 221)
    draw(result)
}

const splitString = (str, length) => {
    if(str.length === 0) return null

    let words = str.match(/\S+/g)
    const arr= []
    let sentence = ''
    do {
        if(sentence.concat(words[0]).length > length) {
            arr.push(sentence)
            sentence = ''
            continue
        }

        sentence = `${sentence.concat(words.shift())} `
    } while(words.length > 0)

    if(sentence.length > 0) {
        arr.push(sentence)
    }

    return arr
}

const draw = result => {
    const template = document.querySelector('template')
    const content = document.querySelector('#content')
    content.innerHTML = ''

    result.forEach(str => {
        const clone = document.importNode(template.content, true)
        const paragraph = clone.querySelector('p')
        paragraph.innerHTML = `<code>.ph forge npc gossip text add</code> ${str}`

        content.appendChild(clone)
    })
}