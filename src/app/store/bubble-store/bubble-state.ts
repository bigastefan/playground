import { State, Action, StateContext } from '@ngxs/store';
import { Bubble } from 'src/app/models/bubble';
import { AddBubble, DeleteBubble } from './bubble-actions';

export class BubbleStateModel {
  selectedBubbles: Bubble[];
}

@State<BubbleStateModel>({
  name: 'bubble',
  defaults: {
    selectedBubbles: []
  }
})

export class BubbleState {
  @Action(AddBubble)
  SelectBubble({ getState, patchState }: StateContext<BubbleStateModel>, { bubble }: AddBubble) {
    const bubbles = getState().selectedBubbles;
    patchState({
      selectedBubbles: [...bubbles, bubble]
    });
  }

  @Action(DeleteBubble)
  deleteBubble({ getState, patchState }: StateContext<BubbleStateModel>, { bubble }: DeleteBubble) {
    const bubbles = getState().selectedBubbles;
    const b = bubbles.filter((selecedBubble) => selecedBubble !== bubble);
    patchState({
      selectedBubbles: [...b]
    });
  }

}

