import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxEditorModule } from 'ngx-editor';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditorComponent } from './editor/editor.component';
import { TopnavComponent } from './nav/topnav/topnav.component';
import { SidenavComponent } from './nav/sidenav/sidenav.component';
import { CourseComponent } from './course/course.component';
import { NewBatchComponent } from './new-batch/new-batch.component';
import { DemoBatchComponent } from './demo-batch/demo-batch.component';
import { CertificationComponent } from './certification/certification.component';
import { JobOpeningsComponent } from './job-openings/job-openings.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    TopnavComponent,
    SidenavComponent,
    CourseComponent,
    NewBatchComponent,
    DemoBatchComponent,
    CertificationComponent,
    JobOpeningsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEditorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app-name'), // imports firebase/app needed for everything
    AngularFireAnalyticsModule, // dynamically imports firebase/analytics
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
