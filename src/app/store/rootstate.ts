import { LayoutStateModel } from './layout-store/layout-state';
import { ExerciseStateModel } from './exercise-store/exercise-state';

export class RootState {
  layout: LayoutStateModel;
  exercise: ExerciseStateModel;
}
