window.onload = () => {
    const form = document.querySelector('form')
    const linkInput = document.querySelector('input[name="link"]')
    const resultInput = document.querySelector('input[name="result"]')
    const message = document.querySelector('#message')

    linkInput.addEventListener('keyup', e => splitStringForLookObject(e.target, resultInput))
}

const splitStringForLookObject = (linkInput, resultInput) => {
    const link = linkInput.value

    if(!link) return
    const word = link.split('/').pop().split('.').shift()

    if(!word) return
    resultInput.value = word

    navigator.clipboard.writeText(word).then(_ => {
        if(message.classList.contains('hidden')) {
            message.classList.remove('hidden')

            setTimeout(() => message.classList.add('hidden'), 3000)
        }
    })
}