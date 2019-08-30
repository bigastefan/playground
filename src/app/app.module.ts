import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragableComponent } from './components/building-blocks/dragable/dragable.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { ExerciseModalComponent } from './components/modals/exercise-modal/exercise-modal.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { LayoutState } from './store/layout-store/layout-state';
import { ExerciseState } from './store/exercise-store/exercise-state';
import { BubbleComponent } from './components/building-blocks/bubbles/bubble/bubble.component';
import { BubbleState } from './store/bubble-store/bubble-state';
import { environment } from 'src/environments/environment.prod';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingCreatorComponent } from './components/building-blocks/training-creator/training-creator.component';
import { QuizComponent } from './components/building-blocks/quiz/quiz.component';
import { CustomSliderComponent } from './components/building-blocks/quiz/custom-slider/custom-slider.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { QuestionsComponent } from './components/building-blocks/quiz/questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    DragableComponent,
    DashboardComponent,
    ExerciseModalComponent,
    BubbleComponent,
    TrainingCreatorComponent,
    QuizComponent,
    CustomSliderComponent,
    QuestionsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule,
    FormsModule,
    CdkStepperModule,
    ReactiveFormsModule,
    NgxsModule.forRoot([
      LayoutState,
      ExerciseState,
      BubbleState,
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
