import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxEditorModule } from "ngx-editor";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { TopnavComponent } from "./nav/topnav/topnav.component";
import { CourseComponent } from "./course/course.component";
import { NewBatchComponent } from "./new-batch/new-batch.component";
import { DemoBatchComponent } from "./demo-batch/demo-batch.component";
import { CertificationComponent } from "./certification/certification.component";
import { JobOpeningsComponent } from "./job-openings/job-openings.component";
import { LoginComponent } from "./login/login.component";
import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
import { CoursesComponent } from "./courses/courses.component";

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    CourseComponent,
    NewBatchComponent,
    DemoBatchComponent,
    CertificationComponent,
    JobOpeningsComponent,
    LoginComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features,
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
