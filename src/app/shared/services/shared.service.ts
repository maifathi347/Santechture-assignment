import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit {
  urlData = new BehaviorSubject<any>({});

  constructor() {
  }

  ngOnInit(): void {

  }

}
