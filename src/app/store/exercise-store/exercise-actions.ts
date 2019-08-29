import { Exercise } from 'src/app/models/exercise';

export class SelectExercise {
  static readonly type = '[exercise] SelectExercise';

  constructor(public exercise: Exercise) {}
}

export class AddExercise {
  static readonly type = '[exercise] AddExercise';

  constructor(public exercise: Exercise) {}
}
