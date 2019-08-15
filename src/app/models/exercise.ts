export class Exercise {
  id: number;
  name: string;
  bodyPart: string;

  constructor(id: number, name: string, bodyPart: string) {
    this.id = id;
    this.name = name;
    this.bodyPart = bodyPart;
  }
}
