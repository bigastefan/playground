import { Exercise } from 'src/app/models/exercise';

export class SelectExercise {
  static readonly type = '[exercise] SelectExercise';

  constructor(public exercise: Exercise) {}
}
