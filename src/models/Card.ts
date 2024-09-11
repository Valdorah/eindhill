class Card {
    constructor(
        public readonly title: string,
        public readonly content: string,
        public readonly url?: string|null,
        public readonly textLink?: string|null,
        public readonly image?: string|null
    ) {}
}

export default Card