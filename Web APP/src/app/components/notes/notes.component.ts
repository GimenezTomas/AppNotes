import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  archived: boolean = false;
  NotesList: any = []
  flag: boolean = false

  constructor( private http: HttpService, private modalService: ModalsService) { }

  ngOnInit(): void {
    this.handleNotes();
    
    this.modalService.$modal.subscribe((value) => {
      this.handleNotes();
    })

    this.modalService.$archived.subscribe((value) => {
      this.archived = !this.archived
      this.handleNotes()
    })

    this.modalService.$modalLogin.subscribe((value) => {
      if(this.http.$userid != 0){
        console.log("user: "+this.http.$userid)
        this.getActiveNote()
      }
    })

    this.modalService.$search.subscribe((value) =>{
      this.http.getLabels().subscribe((data : any) => {
        const labels = data.labels
        labels.forEach( (label:any) => {
          console.log(value + ' ' + label.title)
          if ( label.title == value ){
            this.getNotesByFilter(label.Labelid)
          }
        });
      })
    })
  }

  getNotes(){
    this.http.getNotesList().subscribe(data =>{
      const {notes} = data
      this.NotesList = notes;
    })
  }

  deleteNote(){
    this.handleNotes();

  }

  getArchiveNote(){
    this.http.getArchivedNotesList().subscribe(data =>{
      const {notes} = data
      this.NotesList = notes;
    })
  }
  
  getActiveNote(){
    console.log('entre')
    this.http.getActiveNotesList().subscribe(data =>{
      const {notes} = data
      console.log(data)
      this.NotesList = notes;
    })
  }

  handleNotes(){
    if( this.archived ){
      this.getArchiveNote();
    }else{
      this.getActiveNote();
    }
  }

  getNotesByFilter(param1:any){
    console.log('param1: '+param1)
    this.http.getAllNotesByFilter("label", param1).subscribe(data =>{
      console.log('estoy')
      this.NotesList = data.notes
    })
  } 
}
