import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.css']
})
export class LabelsComponent implements OnInit {

  labels: any

  constructor( private http: HttpService ) { }

  ngOnInit(): void {
    this.http.getLabels().subscribe( (data:any) => {
      console.log(data.labels)
      this.labels = data.labels

    })
  }

}
