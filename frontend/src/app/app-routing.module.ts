import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';

import { FinishComponent } from './components/finish/finish.component';

const routes: Routes = [
  // { path: 'questions/:cid/:qid', component: QuizComponent },
  { path: 'questions', component: QuizComponent },
  { path: 'finish', component: FinishComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

 
}
