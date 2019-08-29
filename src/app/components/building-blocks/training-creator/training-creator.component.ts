import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bubble } from 'src/app/models/bubble';
import { Store } from '@ngxs/store';
import { AddBubble } from 'src/app/store/bubble-store/bubble-actions';
import { Exercise } from 'src/app/models/exercise';
import { AddExercise } from 'src/app/store/exercise-store/exercise-actions';
import { RootState } from 'src/app/store/rootstate';

@Component({
  selector: 'app-training-creator',
  templateUrl: './training-creator.component.html',
  styleUrls: ['./training-creator.component.css']
})
export class TrainingCreatorComponent implements OnInit {

  profileForm = new FormGroup({
    content: new FormControl('')
  });

  constructor(private store: Store) { }

  ngOnInit() {
  }

  onSubmit() {
    const b = new Exercise(123, this.profileForm.value.content, this.profileForm.value.content);
    this.store.dispatch(new AddExercise(b));
    this.store.select((root: RootState) => root.exercise.selectedExercise).subscribe((data) => {
      console.log(data);
    });
  }

}
