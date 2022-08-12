import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NotesComponent } from './components/notes/notes.component';
import { ArchivedNotesComponent } from './components/archived-notes/archived-notes.component';
import { AddModalComponent } from './modals/add-modal/add-modal.component';
import { LoginComponent } from './modals/login/login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LabelsComponent } from './components/labels/labels.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesComponent,
    ArchivedNotesComponent,
    AddModalComponent,
    LoginComponent,
    LabelsComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
