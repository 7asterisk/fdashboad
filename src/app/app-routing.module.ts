import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
} from "@angular/fire/auth-guard";

import { CourseComponent } from "./course/course.component";
import { NewBatchComponent } from "./new-batch/new-batch.component";
import { DemoBatchComponent } from "./demo-batch/demo-batch.component";
import { CertificationComponent } from "./certification/certification.component";
import { JobOpeningsComponent } from "./job-openings/job-openings.component";
import { LoginComponent } from "./login/login.component";
import { CoursesComponent } from "./courses/courses.component";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(["/"]);
const redirectLoggedInToItems = () => redirectLoggedInTo(["course", { id: 0 }]);
const routes: Routes = [
  {
    path: "courses",
    component: CoursesComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "course",
    component: CourseComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "demo-batch",
    component: DemoBatchComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "new-batch",
    component: NewBatchComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "certification",
    component: CertificationComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "job-openings",
    component: JobOpeningsComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "",
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToItems }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
