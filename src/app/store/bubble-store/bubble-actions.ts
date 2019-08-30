import { Bubble } from 'src/app/models/bubble';

export class AddBubble {
  static readonly type = '[bubble] AddBubble';

  constructor(public bubble: Bubble) {}
}

export class DeleteBubble {
  static readonly type = '[bubble] DeleteBubble';

  constructor(public bubble: Bubble) {}
}

export class AddToUnread {
  static readonly type = '[bubble] AddToUnread';

  constructor(public bubble: Bubble) {}
}

export class DeleteFromUnread {
  static readonly type = '[bubble] DeleteFromUnread';

  constructor(public bubble: Bubble) {}
}
