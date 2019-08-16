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

@NgModule({
  declarations: [
    AppComponent,
    DragableComponent,
    DashboardComponent,
    ExerciseModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      LayoutState,
      ExerciseState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
