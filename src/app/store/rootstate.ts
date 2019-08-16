import { LayoutStateModel } from './layout-store/layout-state';
import { ExerciseStateModel } from './exercise-store/exercise-state';
import { BubbleStateModel } from './bubble-store/bubble-state';

export class RootState {
  layout: LayoutStateModel;
  exercise: ExerciseStateModel;
  bubble: BubbleStateModel;
}
