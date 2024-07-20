class Card {
    constructor(
        public readonly title: string,
        public readonly content: string,
        public readonly url: string,
        public readonly textLink: string|null = null,
        public readonly image: string|null = null
    ) {}
}

export default Card