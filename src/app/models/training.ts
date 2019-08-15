import { Exercise } from './exercise';

export class Training {
  id: number;
  name: string;
  exercises: Exercise[];

  constructor(id: number, name: string, exercises: Exercise[]) {
    this.id = id;
    this.name = name;
    this.exercises = exercises;
  }
}
