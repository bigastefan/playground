import { Component, OnInit } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { Training } from 'src/app/models/training';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  exercise1 = new Exercise(1, 'Exercise 1', 'Arms');
  exercise2 = new Exercise(2, 'Exercise 2', 'Legs');
  exercise3 = new Exercise(3, 'Exercise 3', 'Back');
  exercise4 = new Exercise(4, 'Exercise 4', 'Chest');
  exercise5 = new Exercise(5, 'Exercise 5', 'Calves');
  exercise6 = new Exercise(6, 'Exercise 6', 'Lower Back');

  trainingPack1 = [
    this.exercise1, this.exercise2, this.exercise3
  ];

  trainingPack2 = [
    this.exercise5, this.exercise6, this.exercise4, this.exercise1
  ];

  trainingPack3 = [
    this.exercise1, this.exercise6, this.exercise1, this.exercise4, this.exercise2
  ];

  trainingPack4 = [
    this.exercise4, this.exercise1, this.exercise2, this.exercise4, this.exercise2, this.exercise5
  ];

  training1 = new Training(1, 'Training 1', this.trainingPack1);
  training2 = new Training(2, 'Training 2', this.trainingPack2);
  training3 = new Training(3, 'Training 3', this.trainingPack3);
  training4 = new Training(4, 'Training 4', this.trainingPack4);

  bundle = [
    this.training1, this.training2, this.training3
  ];

  // lists
  trainings = [
    this.training1, this.training2, this.training3, this.training4
  ];

  exercises = [
    this.exercise1, this.exercise2, this.exercise3, this.exercise4, this.exercise5, this.exercise6
  ];

  bundles = [
    this.bundle
  ];



  constructor() { }

  ngOnInit() {
    console.log(this.training1);
  }

}
