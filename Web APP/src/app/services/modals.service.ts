import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ModalsService {

  constructor() { }

  $modal = new EventEmitter<any>()
  $archived = new EventEmitter<boolean>()
  $modalLogin = new EventEmitter<any>()  
  $search = new EventEmitter<any>()
}
