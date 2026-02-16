export default class GossipCardElement extends HTMLElement {
    #paragraph
    #copyTextBtn
    #copyTextWithReturnBtn
    #messageElt

    connectedCallback() {
        this.#paragraph = document.querySelector("p")
        const btns = this.querySelectorAll("button")
        this.#copyTextBtn = btns[0]
        this.#copyTextWithReturnBtn = btns[1]
        this.#messageElt = this.querySelector('span')

        this.#copyTextBtn.addEventListener("click", this.#copyText.bind(this))
        this.#copyTextWithReturnBtn.addEventListener("click", this.#copyTextWithReturn.bind(this))
    }

    #copyText(e) {
        navigator.clipboard.writeText(this.#paragraph.innerText).then(this.#setMessageTime.bind(this))
    }

    #copyTextWithReturn(e) {
        navigator.clipboard.writeText(`${this.#paragraph.innerText}$b$b`).then(this.#setMessageTime.bind(this))
    }

    #setMessageTime() {
        if(this.#messageElt.classList.contains('hidden')) {
            this.#messageElt.classList.remove('hidden')

            setTimeout(() => this.#messageElt.classList.add('hidden'), 3000)
        }
    }
}