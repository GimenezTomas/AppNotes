import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlNotes='http://localhost:8000/api/notes/';     
  urlUsers='http://localhost:8000/api/users/';
  urlLabels='http://localhost:8000/api/labels/';
  $userid: number = 0

  constructor(private http:HttpClient) {}

   getNotesList(): Observable<any>{
    return this.http.get(this.urlNotes);
  }
  
  getArchivedNotesList(): Observable<any>{
    return this.http.get(this.urlNotes + 'archived/'+this.$userid+'/null' );
  }
  
  
  getActiveNotesList(): Observable<any>{
    return this.http.get(this.urlNotes + 'active/'+this.$userid+'/null' );
  }

  getAllNotesByFilter(filter:any, param1: any = null): Observable<any>{
    return this.http.get(this.urlNotes+'label/'+this.$userid+'/'+param1 );
  }

  deleteNotes(id: number): Observable<any>{
    console.log('URL: '+this.urlNotes + id)
    return this.http.delete(this.urlNotes + id);

  }

  archiveNotes(id:number, body:any): Observable<any>{
    return this.http.put(this.urlNotes + id, body);

  }

  addNotes(body: any): Observable<any>{
    return this.http.post(this.urlNotes, body )
  }

  postUser(url: string, body: any): Observable<any>{
    return this.http.post(this.urlUsers + url, body)
  }

  getLabels(){
    return this.http.get(this.urlLabels)
  }
 
}
