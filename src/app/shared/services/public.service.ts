import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  show_loader = new Subject<boolean>();
  theme = new BehaviorSubject<any>('');
  constructor(
  ) { }

  ngOnInit(): void {
  }
}
