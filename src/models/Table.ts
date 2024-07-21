class Table {
    constructor(
        public readonly columns: Cell[],
        public readonly values: Entry[],
        public readonly caption: string|null = null
    ) {}
}

class Cell {
    constructor(
        public readonly value: string,
        public readonly className: string = '',
        public readonly key: string
    ) {}
}

class Entry {
    [key: string]: string;
}

export default Table