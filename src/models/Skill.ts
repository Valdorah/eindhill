class Skill {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly image: string | null = null,
  ) {}
}

export default Skill;
