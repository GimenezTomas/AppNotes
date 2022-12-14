import { HttpSentEvent } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { GlobalVariablesService } from 'src/app/services/global-variables.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() username:any
  @Input() password:any

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpService, private globalVariables: GlobalVariablesService) {
    this.form = this.fb.group({
      username:['', Validators.required],
      password:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  closeLoginModal(){
    this.globalVariables.$modalLogin.emit(false)
  }

  getUser(){
    this.http.postUser('get',{username: (document.getElementById('username') as HTMLInputElement || null )?.value,password: (document.getElementById('password') as HTMLInputElement || null )?.value}).subscribe(data =>{
      if(data.user){
        this.http.$userid = data.user.Userid
        this.closeLoginModal();
      }
    })
  }


}
