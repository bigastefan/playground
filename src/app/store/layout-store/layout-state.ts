import { State, Action, StateContext } from '@ngxs/store';
import { ChangeModalVisibility } from './layout-actions';

export enum Modals {
  ExerciseModal = 'ExerciseModal'
}

export enum Visibility {
  Open = 'Open',
  Closed = 'Closed'
}

export class LayoutStateModel {
  modalsVisibility: {};
}

@State<LayoutStateModel>({
  name: 'layout',
  defaults: {
    modalsVisibility: {}
  }
})

export class LayoutState {
  @Action(ChangeModalVisibility)
  changeModalVisibility({ getState, patchState }: StateContext<LayoutStateModel>, { modal, visibility }: ChangeModalVisibility) {
    const modalsVisibility = getState().modalsVisibility;

    const newVisibility = { ...modalsVisibility };
    newVisibility[modal] = visibility;

    patchState({
      modalsVisibility: newVisibility
    });
  }
}
