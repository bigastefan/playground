import { Component, Input, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList } from '@angular/cdk/drag-drop';
import { Exercise } from 'src/app/models/exercise';
import { Training } from 'src/app/models/training';
import { Store } from '@ngxs/store';
import { ChangeModalVisibility } from 'src/app/store/layout-store/layout-actions';
import { Modals, Visibility } from 'src/app/store/layout-store/layout-state';
import { RootState } from 'src/app/store/rootstate';
import { SelectExercise } from 'src/app/store/exercise-store/exercise-actions';

@Component({
  selector: 'app-dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DragableComponent implements OnInit {

  @ViewChild('exercisesList') exer: CdkDropList;
  @ViewChild('trainingsList') train: CdkDropList;

  @Input() exercises: Exercise[];
  @Input() trainings: Training[];
  @Input() bundles: any;

  isExerciseModalVisible: Boolean = false;

  selectedName: string;
  selectedTraining: Exercise[];
  copy: Exercise[] = [];
  selectedExercise: Exercise;

  constructor(private store: Store) { }

  ngOnInit() {
    console.log(this.exercises);
    console.log(this.trainings);
    console.log(this.bundles);

    console.log(this.exer.connectedTo.valueOf());
    this.store.select((rootState: RootState) => rootState.layout.modalsVisibility).subscribe(modalsVisibility => {
      this.isExerciseModalVisible = modalsVisibility[Modals.ExerciseModal] === Visibility.Open;
      console.log(this.isExerciseModalVisible);
    }
    );
  }

  drop(event: CdkDragDrop<{}[]>, element: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('element ====> ', element);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    // console.log(this.trainings);
  }

  select(itemId: number) {
    const selectedTraining = this.trainings.filter((training) => training.id === itemId);
    this.selectedTraining = selectedTraining[0].exercises;
    this.selectedName = selectedTraining[0].name;
  }

  copyObject(item: Exercise) {
    const c = new Exercise(item.id, item.name, item.bodyPart);
    this.copy.push(c);
    console.log(c);
  }

  deleteObject(item: Exercise) {
    this.exercises = this.exercises.filter((obj) => obj !== item);
  }

  openExerciseModal(item: Exercise) {
    console.log({ item });
    this.store.dispatch(new SelectExercise(item));
    this.store.dispatch(new ChangeModalVisibility(Modals.ExerciseModal, Visibility.Open));
  }

  closeModal() {
    this.store.dispatch(new ChangeModalVisibility(Modals.ExerciseModal, Visibility.Closed));
  }

}
