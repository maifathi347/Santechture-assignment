import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SharedService } from './shared/services/shared.service';
import { PrimeNGConfig } from 'primeng/api';
import { Component } from '@angular/core';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url: any = {};
  showSpinner: boolean = true;

  constructor(

  ) {
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);


  }
  ngOnInit(): void {

  }

}
