import { Modals, Visibility } from './layout-state';

export class ChangeModalVisibility {
  static readonly type = '[layout] ChangeModalVisibility';

  constructor(public modal: Modals, public visibility: Visibility) {}
}
