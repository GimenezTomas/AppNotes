import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archived-notes',
  templateUrl: './archived-notes.component.html',
  styleUrls: ['./archived-notes.component.css']
})
export class ArchivedNotesComponent implements OnInit {

  ArchivedNotesList = [
    ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
