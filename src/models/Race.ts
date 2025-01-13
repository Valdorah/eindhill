import type Skill from "./Skill";

class Race {
    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly image: string|null = null,
        public readonly racialSkills: Skill[] = [],
        public readonly armorType: string[] = [],
        public readonly additionalInfo?: string
    ) {}
}

export default Race