import { PublicService } from './../../services/public.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  collapsedMenu: boolean = false;
  currentTheme: any;

  constructor(
    private publicService: PublicService,
  ) { }

  ngOnInit(): void {
    this.publicService?.theme?.subscribe((res: any) => {
      this.currentTheme = res;
    })
  }

}

