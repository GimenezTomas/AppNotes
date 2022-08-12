import { Component, EventEmitter } from '@angular/core';
import { GlobalVariablesService } from './services/global-variables.service';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  archived: boolean = true
  modal: boolean = false
  modalLogin: boolean = true
  logged: boolean = false
  empty: boolean = true

  constructor( private globalVariables: GlobalVariablesService, private http: HttpService ){}

  ngOnInit(){
    this.globalVariables.$modal.subscribe((value) => {
      this.modal = value
    })

    this.globalVariables.$modalLogin.subscribe((value) => {
     if( !value && this.http.$userid != 0 ){
        this.modalLogin = value
        this.empty = false
        this.logged = true
      }else if(!value && this.http.$userid == 0 ){
        this.logged = false
        this.modalLogin = value
      }

    })

    this.globalVariables.$archived.subscribe( value => {
      this.archived = !this.archived
      this.switchNotes(this.archived)
    })
  }

  switchNotes( active: boolean ){
    if(active){
      (document.getElementById('button2') as HTMLButtonElement || null).innerText = 'ARCHIVED NOTES'
    }else{
      (document.getElementById('button2') as HTMLButtonElement || null).innerText = 'ACTIVE NOTES'
    }
  }

  openLoginModal(){
    this.modalLogin = true
  }

  emit(){
    this.globalVariables.$archived.emit(true)
  }

  logout(){
    this.http.$userid = 0
    this.logged = false
  }

  openNotesModal(){
    if (this.http.$userid != 0) {
        this.modal = true
    }
  }

  searchByLabel(){
    const labelID = (document.getElementById('search') as HTMLInputElement || null )?.value
    this.globalVariables.$search.emit(labelID)
    console.log('searching...')
  }
}
