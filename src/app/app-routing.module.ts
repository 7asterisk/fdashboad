import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './course/course.component';
import { NewBatchComponent } from './new-batch/new-batch.component';
import { DemoBatchComponent } from './demo-batch/demo-batch.component';
import { CertificationComponent } from './certification/certification.component'
import { JobOpeningsComponent } from './job-openings/job-openings.component';
const routes: Routes = [
  {path:'course', component:CourseComponent },
  {path:'demo-batch',component:DemoBatchComponent },
  {path: 'new-batch',component:NewBatchComponent},
  {path:'certification',component: CertificationComponent},
  {path:'job-openings',component: JobOpeningsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
