import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

import { faArchive, faBoxArchive, faCoffee, faInbox, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() title:any
  @Input() content:any
  @Input() id:any
  @Input() archived:any
  @Input() labelid:any
  @Input() userid:any

  @Output() deleted = new EventEmitter<boolean>();

  pencilIcon = faPencil
  trash = faTrash
  archive = faBoxArchive
  active = faArchive

  form: FormGroup;

  constructor( private fb: FormBuilder, private http:HttpService ) { 
    this.form = this.fb.group({
      title:['', Validators.required],
      content:['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  deleteNote(){
    console.log('id: '+this.id)

    this.http.deleteNotes(this.id).subscribe(data => {
      console.log(data);
      this.deleted.emit(this.id)
    });
    
  }

  archiveNote(){
    this.http.archiveNotes(this.id,{status:false}).subscribe(data =>{
      console.log(data);
      this.deleted.emit(this.id)
    })
  }

  activeNote(){
    this.http.archiveNotes(this.id,{status:true}).subscribe(data =>{
      console.log(data);
      this.deleted.emit(this.id)
    })
  }

}
