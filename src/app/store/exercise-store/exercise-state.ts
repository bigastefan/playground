import { State, Action, StateContext } from '@ngxs/store';
import { SelectExercise } from './exercise-actions';
import { Exercise } from 'src/app/models/exercise';

export class ExerciseStateModel {
  selectedExercise: Exercise[];
}

@State<ExerciseStateModel>({
  name: 'exercise',
  defaults: {
    selectedExercise: []
  }
})

export class ExerciseState {
  @Action(SelectExercise)
  SelectExercise({ patchState }: StateContext<ExerciseStateModel>, { exercise }: SelectExercise) {

    patchState({
      selectedExercise: [exercise]
    });

  }
}

