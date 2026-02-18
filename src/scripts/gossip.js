import GossipCardElement from "../webComponents/GossipCardElement.js"

window.onload = () => {
    customElements.define("app-gossip-card", GossipCardElement)

    const form = document.querySelector('form')

    form.addEventListener('submit', handleSubmit)
}

const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const entries = formData.entries()

    const htmlArr= addCommands(entries)
    const content = document.querySelector('#content')
    content.innerHTML = htmlArr.join('<br />')
}

const splitString = (str, length) => {
    if(str.length === 0) return []

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

const addCommands = entries => {
    const finalString = []
    entries.forEach(([type, value]) => {
        switch(type) {
            case 'title':
                finalString.push(`<code>.ph for npc goss tex add</code> [ ${value} ]`)
                break;
            case 'gossip':
                const arr = splitString(value, 200).map((v, index) => {
                    return `<code>.ph for npc goss tex add</code> ${index === 0 ? '$b$b' : ''}${v}`
                })
                finalString.push(...arr)
                break;
            case 'option':
                finalString.push(`<code>.ph for npc goss opt add</code> — [ ${value} ]`)
                break;
        }
    })

    return finalString
}