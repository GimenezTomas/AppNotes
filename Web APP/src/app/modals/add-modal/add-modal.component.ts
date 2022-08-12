import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ModalsService } from 'src/app/services/modals.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.css']
})

export class AddModalComponent implements OnInit {
  
  content: string = ''
  labels: any = []

  @Output() deleted = new EventEmitter<boolean>();

  constructor(private modalService: ModalsService, private http: HttpService) { } 
 
  ngOnInit(): void {
    this.http.getLabels().subscribe( (data: any) => {
      this.labels = data.labels
    })
  }
  
  closeModal(){
    this.modalService.$modal.emit(false)
  }

  addNote(){
    const body = {
      title: (document.getElementById('title') as HTMLInputElement || null )?.value,
      content: (document.getElementById('content') as HTMLInputElement || null )?.value,
      time: '2022-08-11',
      userid: this.http.$userid,
      labelid: (document.getElementById('combo') as HTMLSelectElement || null )?.options[(document.getElementById('combo') as HTMLSelectElement || null )?.selectedIndex].value
    }

    console.log(body)

    this.http.addNotes(body).subscribe(data =>{
      console.log(data)
      this.closeModal();
      this.deleted.emit(true);

    })
  }
  

}
