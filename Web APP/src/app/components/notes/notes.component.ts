import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  archived: boolean = false;
  NotesList: any = []
  flag: boolean = false
  @Output() empty = new EventEmitter<boolean>()

  constructor( private http: HttpService, private globalVariables: GlobalVariablesService) { }

  ngOnInit(): void {
    this.handleNotes();

    this.globalVariables.$modal.subscribe((value) => {
      this.handleNotes();
    })

    this.globalVariables.$archived.subscribe((value) => {
      this.archived = !this.archived
      this.handleNotes()
    })

    this.globalVariables.$modalLogin.subscribe((value) => {
      if(this.http.$userid != 0){
        this.handleNotes()
      }
    })

    this.globalVariables.$search.subscribe((value) =>{
      this.http.getLabels().subscribe((data : any) => {
        const labels = data.labels
        labels.forEach( (label:any) => {
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
      this.emptyFn()
    })
  }

  deleteNote(){
    this.handleNotes();

  }

  getArchiveNote(){
    this.http.getArchivedNotesList().subscribe(data =>{
      const {notes} = data
      this.NotesList = notes;
      this.emptyFn()
    })
  }

  getActiveNote(){
    console.log('entre')
    this.http.getActiveNotesList().subscribe(data =>{
      const {notes} = data
      console.log(data)
      this.NotesList = notes;
      this.emptyFn()
    })
  }

  handleNotes(){
    console.log('handleNotes')
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
      this.emptyFn()
    })
  }

  emptyFn(){
    console.log('khjgvgvhk')
    if ( this.NotesList.length > 0 ) {
      this.empty.emit(false)
    }else{
      this.empty.emit(true)
    }
  }
}
