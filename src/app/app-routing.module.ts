import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BubbleComponent } from './components/building-blocks/bubbles/bubble/bubble.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bubbles', component: BubbleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
