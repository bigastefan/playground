import { Bubble } from 'src/app/models/bubble';

export class AddBubble {
  static readonly type = '[bubble] AddBubble';

  constructor(public bubble: Bubble) {}
}
