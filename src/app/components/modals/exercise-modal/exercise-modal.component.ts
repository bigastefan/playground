import { Component, OnInit, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { Store } from '@ngxs/store';
import { ChangeModalVisibility } from 'src/app/store/layout-store/layout-actions';
import { Modals, Visibility } from 'src/app/store/layout-store/layout-state';
import { RootState } from 'src/app/store/rootstate';

@Component({
  selector: 'app-exercise-modal',
  templateUrl: './exercise-modal.component.html',
  styleUrls: ['./exercise-modal.component.css']
})
export class ExerciseModalComponent implements OnInit {

  @Input() exercise: Exercise;

  selectedExercise: Exercise;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.select((state: RootState) => state.exercise.selectedExercise).subscribe(e => {
      this.selectedExercise = e[0];
    });
  }

  closeModal() {
    this.store.dispatch(new ChangeModalVisibility(Modals.ExerciseModal, Visibility.Closed));
  }

}
